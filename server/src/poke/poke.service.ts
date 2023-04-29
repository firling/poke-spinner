import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Poke } from 'src/entities/poke.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokesService {
  constructor(
    @InjectRepository(Poke)
    private pokesRepository: Repository<Poke>,
  ) {}

  findAll(): Promise<Poke[]> {
    return this.pokesRepository.find();
  }

  findOne(id: number): Promise<Poke | null> {
    return this.pokesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.pokesRepository.delete(id);
  }
}
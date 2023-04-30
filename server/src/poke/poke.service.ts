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

  findOneById(id: number): Promise<Poke | null> {
    return this.pokesRepository.findOneBy({ id });
  }

  findOneByPokedexId(pokedexId: number): Promise<Poke | null> {
    return this.pokesRepository.findOneBy({ pokedexId });
  }

  async remove(id: number): Promise<void> {
    await this.pokesRepository.delete(id);
  }

  async create(
    name: string,
    baseHp: number,
    baseAttack: number,
    baseDefense: number,
    baseSpecialAttack: number,
    baseSpecialDefense: number,
    baseSpeed: number,
    pokedexId: number,
  ): Promise<Poke> {
    const user = new Poke();
    user.name = name;
    user.baseHp = baseHp;
    user.baseAttack = baseAttack;
    user.baseDefense = baseDefense;
    user.baseSpecialAttack = baseSpecialAttack;
    user.baseSpecialDefense = baseSpecialDefense;
    user.baseSpeed = baseSpeed;
    user.pokedexId = pokedexId;
    return this.pokesRepository.save(user);
  }
}

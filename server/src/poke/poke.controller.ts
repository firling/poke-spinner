import { Controller, Get } from '@nestjs/common';
import { PokesService } from './poke.service';
import { Poke } from 'src/entities/poke.entity';

@Controller('/poke')
export class PokesController {
  constructor(private readonly pokesService: PokesService) {}

  @Get()
  async getPokes(): Promise<Poke[]> {
    return await this.pokesService.findAll();
  }
}

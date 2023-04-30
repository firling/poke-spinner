import { Controller, Get } from '@nestjs/common';
import { PokesService } from './poke.service';
import { Poke } from 'src/entities/poke.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('/poke')
export class PokesController {
  constructor(
    private readonly pokesService: PokesService,
    private readonly httpService: HttpService
  ) {}

  @Get()
  async getPokes(): Promise<Poke[]> {
    return await this.pokesService.findAll();
  }

  @Get('/initialize')
  async initializePokes(): Promise<Poke[]> {
    const pokeIds = [
      1, 4, 7, 10, 13, 16, 19, 21, 23, 25, 27, 29, 32, 35, 37, 39, 41, 43, 46,
    ]

    for (const pokeId of pokeIds) {
      const exists = await this.pokesService.findOneByPokedexId(pokeId)
      if (exists) {
        continue;
      }
      const poke = await firstValueFrom(this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`))
      const pokeName = await firstValueFrom(this.httpService.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`))
      await this.pokesService.create(
        pokeName.data.names.find((name) => name.language.name === 'fr').name,
        poke.data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        poke.data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        poke.data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        poke.data.stats.find((stat) => stat.stat.name === 'special-attack').base_stat,
        poke.data.stats.find((stat) => stat.stat.name === 'special-defense').base_stat,
        poke.data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
        poke.data.id,
      )
    }

    return await this.pokesService.findAll();
  }
}

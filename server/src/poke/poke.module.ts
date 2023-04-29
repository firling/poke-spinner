import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poke } from 'src/entities/poke.entity';
import { PokesService } from './poke.service';
import { PokesController } from './poke.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Poke])],
  providers: [PokesService],
  controllers: [PokesController],
})
export class PokesModule {}
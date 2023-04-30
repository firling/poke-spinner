import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poke } from 'src/entities/poke.entity';
import { PokesService } from './poke.service';
import { PokesController } from './poke.controller';
import { UserPoke } from 'src/entities/userPoke.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Poke, UserPoke]), HttpModule],
  providers: [PokesService],
  controllers: [PokesController],
})
export class PokesModule {}
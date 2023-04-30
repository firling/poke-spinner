import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserPoke } from './userPoke.entity';

@Entity()
export class Poke {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  baseHp: number;
  @Column()
  baseAttack: number;
  @Column()
  baseDefense: number;
  @Column()
  baseSpecialAttack: number;
  @Column()
  baseSpecialDefense: number;
  @Column()
  baseSpeed: number;

  @Column()
  pokedexId: number;

  @OneToMany(() => UserPoke, userPoke => userPoke.poke)
  public userPokes: UserPoke[];
}
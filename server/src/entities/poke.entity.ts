import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
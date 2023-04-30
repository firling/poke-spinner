import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserPoke } from './userPoke.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @Column()
  level: number;

  @OneToMany(() => UserPoke, userPoke => userPoke.user)
  public userPokes: UserPoke[];
}
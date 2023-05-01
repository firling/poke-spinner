import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entity"
import { Poke } from "./poke.entity"

@Entity()
export class UserPoke {
    @PrimaryGeneratedColumn()
    public userPokeId: number

    @Column()
    public isEquipped: boolean

    @Column()
    public level: number

    @Column()
    public position: number

    @ManyToOne(() => User, (user) => user.userPokes)
    public user: User

    @ManyToOne(() => Poke, (poke) => poke.userPokes)
    public poke: Poke
}
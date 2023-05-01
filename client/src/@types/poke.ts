export interface IPoke {
    id: number;
    name: string;
    baseHp: number;
    baseAttack: number;
    baseDefense: number;
    baseSpecialAttack: number;
    baseSpecialDefense: number;
    baseSpeed: number;
    pokedexId: number;
}

export interface IUserPoke {
    userPokeId: number;
    isEquipped: boolean;
    level: number;
    position: number;
    poke: IPoke;
}

export interface IUserWithPoke {
    id: string;
    username: string;
    userPokes: IUserPoke[];
}
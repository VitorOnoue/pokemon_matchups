export interface GetPokemonParams {
    pokemonName: string;
}

export interface UpdatePokemonParams {
    pokemonName: string;
}

export interface DeletePokemonParams {
    pokemonName: string;
}

export interface Pokemon {
    number: number
    id: number
    name: string
    hp: number
    atk: number
    spAtk: number
    defense: number
    spDefense: number
    speed: number
}
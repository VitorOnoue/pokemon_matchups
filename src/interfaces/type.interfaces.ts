import { PokemonType } from "../types/pokemon.types.js"

export interface GetTypeParams {
    typeName: PokemonType
}

export interface UpdateTypeParams {
    typeName: PokemonType
}

export interface DeleteTypeParams {
    typeName: PokemonType
}
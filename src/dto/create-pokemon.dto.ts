export interface CreatePokemonDTO {
    number: number
    name: string
    hp: number
    atk: number
    spAtk: number
    defense: number
    spDefense: number
    speed: number

    types: string[]
    moves: string[]
}
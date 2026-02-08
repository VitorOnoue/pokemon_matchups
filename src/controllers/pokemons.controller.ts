import { Request, Response } from 'express';
import * as pokemonService from '../services/pokemon.service.js';
import { CreatePokemonDTO } from '../dto/create-pokemon.dto.js';

interface GetPokemonParams {
    pokemonName: string;
}

export const getPokemonByName = async (req: Request<GetPokemonParams>, res: Response) => {
    const name = req.params.pokemonName;
    const pokemon = await pokemonService.findPokemonByName(name);
    res.status(200).json(pokemon);
}

export const createNewPokemon = async (req: Request<{}, {}, CreatePokemonDTO>, res: Response) => {
    const newPokemon = req.body;
    await pokemonService.createPokemon(newPokemon);
    res.status(201).send();
}

// model Pokemon {
//   // columns
//   id Int @id @default(autoincrement())
//   number Int @unique
//   name String @unique
//   hp Int
//   atk Int
//   spAtk Int @map("sp_attack")
//   defense Int @map("def")
//   spDefense Int @map("sp_def")
//   speed Int
  
//   // relations
//   types PokemonType[]
//   moves PokemonMove[]

//   @@map("pokemons")
// }
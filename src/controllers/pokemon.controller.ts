import { Request, Response } from 'express';
import * as pokemonService from '../services/pokemon.service.js';
import { CreatePokemonDTO } from '../dto/create-pokemon.dto.js';
import { UpdatePokemonDTO } from '../dto/update-pokemon.dto.js';

interface GetPokemonParams {
    pokemonName: string;
}

interface UpdatePokemonParams {
    pokemonName: string;
}

interface DeletePokemonParams {
    pokemonName: string;
}

export const getPokemonByNameController = async (req: Request<GetPokemonParams>, res: Response) => {
    const pokemonName = req.params.pokemonName;
    const foundPokemon = await pokemonService.findPokemonByName(pokemonName);
    res.status(200).json(foundPokemon);
}

export const createNewPokemonController = async (req: Request<{}, {}, CreatePokemonDTO>, res: Response) => {
    const createData = req.body;
    const createdPokemon = await pokemonService.createPokemon(createData);
    res.status(201).json(createdPokemon);
}

export const updatePokemonController = async (req: Request<UpdatePokemonParams, {}, UpdatePokemonDTO>, res: Response) => {
    const pokemonName = req.params.pokemonName;
    const updateData = req.body;
    const updatedPokemon = await pokemonService.updatePokemon(pokemonName, updateData);
    res.status(200).json(updatedPokemon);
}

export const deletePokemonController = async (req: Request<DeletePokemonParams>, res: Response) => {
    const pokemonName = req.params.pokemonName;
    await pokemonService.deletePokemon(pokemonName);
    res.sendStatus(204);
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
import { Request, Response } from 'express';
import * as pokemonService from '../services/pokemon.service.js';

interface PokemonParams {
    pokemonName: string;
}

export const getPokemonByName = async (req: Request<PokemonParams>, res: Response) => {
    const name = req.params.pokemonName;
    const pokemon = await pokemonService.findPokemonByName(name);
    res.status(200).json(pokemon);
}

export const createNewPokemon = async (req: Request, res: Response) => {
    res.status(201).send();
}
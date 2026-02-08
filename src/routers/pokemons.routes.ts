import { Router } from 'express';
import * as pokemonsController from '../controllers/pokemons.controller.js';

const router = Router();

router.get('/pokemon/:pokemonName', pokemonsController.getPokemonByName);

router.post('/pokemon/new', pokemonsController.createNewPokemon);

export { router as pokemonRouter };
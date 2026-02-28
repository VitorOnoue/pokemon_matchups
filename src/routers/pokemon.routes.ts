import { Router } from 'express';
import * as pokemonsController from '../controllers/pokemon.controller.js';

const router = Router();

router.get('/pokemon/:pokemonName', pokemonsController.getPokemonByNameController);

router.post('/pokemon/new', pokemonsController.createNewPokemonController);

export { router as pokemonRouter };
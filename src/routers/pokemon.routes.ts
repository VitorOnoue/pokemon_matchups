import { Router } from 'express';
import * as pokemonsController from '../controllers/pokemon.controller.js';

const router = Router();

router.get('/pokemon/:pokemonName', pokemonsController.getPokemonByNameController);
router.post('/pokemon/new', pokemonsController.createNewPokemonController);
router.patch('/pokemon/:pokemonName', pokemonsController.updatePokemonController);
router.delete('/pokemon/:pokemonName', pokemonsController.deletePokemonController);

export { router as pokemonRouter };
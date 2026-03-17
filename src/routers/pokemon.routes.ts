import { Router } from 'express';
import * as pokemonsController from '../controllers/pokemon.controller.js';

const router = Router();

router.get('/:pokemonName', pokemonsController.getPokemonByNameController);
router.post('/new', pokemonsController.createNewPokemonController);
router.patch('/:pokemonName', pokemonsController.updatePokemonController);
router.delete('/:pokemonName', pokemonsController.deletePokemonController);

export { router as pokemonRouter };
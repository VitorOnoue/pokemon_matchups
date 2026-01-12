import { Router } from 'express';
import * as pokemonsController from '../controllers/pokemons.controller.js';

const router = Router();

router.get('/pokemon/:name', pokemonsController.findById);

export { router as pokemonRouter };
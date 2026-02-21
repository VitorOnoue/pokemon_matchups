import { Router } from 'express';
import * as battlesController from '../controllers/battle.controller.js';

const router = Router();

router.get('/battle/:pokemonNameA/:pokemonNameB', battlesController.battle);

export { router as battleRouter }
import { Request, Response } from 'express';
import * as battleService from '../services/battle.service.js';
import { BattleParams } from '../interfaces/battle.interfaces.js';


export const battleController = async (req: Request<BattleParams>, res: Response) => {
    const { pokemonNameA, pokemonNameB } = req.params;
    const result = await battleService.pokemonBattle(pokemonNameA, pokemonNameB);
    return res.json(result);
}
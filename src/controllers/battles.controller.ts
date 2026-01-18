import { Request, Response } from 'express';
import * as battleService from '../services/battle.service.js';

interface BattleParams {
    pokemonNameA: string,
    pokemonNameB: string
}

export const battle = async (req: Request<BattleParams>, res: Response) => {
    const { pokemonNameA, pokemonNameB } = req.params;
    if (!pokemonNameA || !pokemonNameB) {
        throw new Error();
    }
    const result = await battleService.startBattle(pokemonNameA, pokemonNameB);
    return res.json(result);
}
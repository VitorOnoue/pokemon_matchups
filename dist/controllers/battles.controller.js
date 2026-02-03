import * as battleService from '../services/battle.service.js';
export const battle = async (req, res) => {
    const { pokemonNameA, pokemonNameB } = req.params;
    if (!pokemonNameA || !pokemonNameB) {
        throw new Error();
    }
    const result = await battleService.startBattle(pokemonNameA, pokemonNameB);
    return res.json(result);
};
//# sourceMappingURL=battles.controller.js.map
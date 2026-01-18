import * as battleService from '../services/battle.service.js';
export const battle = async (req, res) => {
    const { nameA, nameB } = req.params;
    if (!nameA || !nameB) {
        throw new Error();
    }
    const result = await battleService.startBattle(nameA, nameB);
    return res.json(result);
};
//# sourceMappingURL=battles.controller.js.map
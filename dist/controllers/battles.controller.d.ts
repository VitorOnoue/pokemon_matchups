import { Request, Response } from 'express';
interface BattleParams {
    pokemonNameA: string;
    pokemonNameB: string;
}
export declare const battle: (req: Request<BattleParams>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=battles.controller.d.ts.map
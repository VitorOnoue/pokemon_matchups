import { Request, Response } from 'express';
interface BattleParams {
    nameA: string;
    nameB: string;
}
export declare const battle: (req: Request<BattleParams>, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=battles.controller.d.ts.map
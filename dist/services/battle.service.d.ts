export declare const startBattle: (nameA: string, nameB: string) => Promise<(import("mongoose").Document<unknown, {}, {
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: import("mongoose").Types.ObjectId[];
}, {}, import("mongoose").DefaultSchemaOptions> & {
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: import("mongoose").Types.ObjectId[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
//# sourceMappingURL=battle.service.d.ts.map
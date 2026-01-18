import mongoose from 'mongoose';
declare const Pokemon: mongoose.Model<{
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: mongoose.Types.ObjectId[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: mongoose.Types.ObjectId[];
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: mongoose.Types.ObjectId[];
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    stats: {
        healthPoints: number;
        attack: number;
        defense: number;
        spAttack: number;
        spDefense: number;
        speed: number;
    };
    types: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Pokemon;
//# sourceMappingURL=pokemon.d.ts.map
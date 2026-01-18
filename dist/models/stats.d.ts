import mongoose from 'mongoose';
declare const statsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    healthPoints: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    healthPoints: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    healthPoints: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default statsSchema;
//# sourceMappingURL=stats.d.ts.map
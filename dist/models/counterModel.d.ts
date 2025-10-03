import mongoose from "mongoose";
declare const Counter: mongoose.Model<{
    count: number;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    count: number;
}, {}, mongoose.DefaultSchemaOptions> & {
    count: number;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    count: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    count: number;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    count: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default Counter;
//# sourceMappingURL=counterModel.d.ts.map
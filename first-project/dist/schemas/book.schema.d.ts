import * as mongoose from 'mongoose';
export declare const BookSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string;
    author?: string;
    isbn?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    title?: string;
    author?: string;
    isbn?: string;
}>> & Omit<mongoose.FlatRecord<{
    title?: string;
    author?: string;
    isbn?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

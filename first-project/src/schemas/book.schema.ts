import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
});
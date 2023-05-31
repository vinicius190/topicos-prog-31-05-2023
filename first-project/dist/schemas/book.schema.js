"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
});
//# sourceMappingURL=book.schema.js.map
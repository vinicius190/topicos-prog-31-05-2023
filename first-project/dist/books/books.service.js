"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./entities/book.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BooksService = class BooksService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    create(createBookDto) {
        throw new common_1.HttpException('Criando', common_1.HttpStatus.FORBIDDEN);
        const createdBook = this.bookModel.create(createBookDto);
        return createdBook;
    }
    findAll() {
        throw new common_1.HttpException('Busca Tudo', common_1.HttpStatus.FORBIDDEN);
        const findAllBooks = this.bookModel.find();
        return findAllBooks;
    }
    findOne(id) {
        throw new common_1.HttpException('Busca 1', common_1.HttpStatus.FORBIDDEN);
        const findBook = this.bookModel.findById(id);
        return findBook;
    }
    update(id, updateBookDto) {
        throw new common_1.HttpException('Alterando', common_1.HttpStatus.FORBIDDEN);
        const createdBook = this.bookModel.findByIdAndUpdate(id, {
            title: updateBookDto.title,
            author: updateBookDto.author,
            isbn: updateBookDto.isbn
        }, { new: true });
        return createdBook;
    }
    async remove(id) {
        throw new common_1.HttpException('Removendo', common_1.HttpStatus.FORBIDDEN);
        await this.bookModel.deleteOne({ _id: id });
        return "DELETADO";
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_entity_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  create(createBookDto: CreateBookDto) {
    throw new HttpException('Criando', HttpStatus.FORBIDDEN)
    const createdBook = this.bookModel.create(createBookDto);
    return createdBook;
  }

  findAll() {
    throw new HttpException('Busca Tudo', HttpStatus.FORBIDDEN)
    const findAllBooks = this.bookModel.find();
    return findAllBooks;
  }

  findOne(id: number) {
    throw new HttpException('Busca 1', HttpStatus.FORBIDDEN)
    const findBook = this.bookModel.findById(id);
    return findBook;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    throw new HttpException('Alterando', HttpStatus.FORBIDDEN)
    const createdBook = this.bookModel.findByIdAndUpdate(id,{
      title: updateBookDto.title,
      author: updateBookDto.author,
      isbn: updateBookDto.isbn
    },{new: true},);
    return createdBook;
  }

  async remove(id: number) {
    throw new HttpException('Removendo', HttpStatus.FORBIDDEN)
    await this.bookModel.deleteOne({_id: id});
    return "DELETADO";
  }
}

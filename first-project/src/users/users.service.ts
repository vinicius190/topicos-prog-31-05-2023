import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

export type Users = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUser(username: string): Promise<Users | undefined> {
    return this.users.find(user => user.username === username);
  }

  create(createUserDto: CreateUserDto) {
    if (createUserDto.age > 100) {
      throw new HttpException('Quebraaaaaaa', HttpStatus.FORBIDDEN)
    }

    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  findAll() {
    throw new HttpException('Traz tudo', HttpStatus.FORBIDDEN)
    const findedUsers = this.userModel.find();
    return findedUsers;
  }

  findOne(id: number) {
    throw new HttpException('Traz um', HttpStatus.FORBIDDEN)
    const findedUser = this.userModel.findById(id);
    return findedUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    throw new HttpException('Alterando', HttpStatus.FORBIDDEN)
    const updatedUser = this.userModel.findByIdAndUpdate(
      id,
      {
        name: updateUserDto.name,
        age: updateUserDto.age,
        email: updateUserDto.email,
      },
      { new: true },
    );

    return updatedUser;
  }

  async remove(id: number) {
    throw new HttpException('Removendo', HttpStatus.FORBIDDEN)
    await this.userModel.deleteOne({ _id: id });

    return 'OK';
  }
}

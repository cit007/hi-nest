import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(user: CreateUserDto) {
    const createdUser = new this.userModel({
      username: user.username,
      password: user.password,
    });
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(username: string) {
    const user = await this.userModel.findOne({ username: username }).exec();
    if (!user) {
      throw new NotFoundException('could not find user');
    }
    return user;
  }
}

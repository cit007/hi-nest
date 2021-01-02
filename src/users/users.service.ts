import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];
  createUser(user: CreateUserDto) {
    console.log('insert user:', user);
    this.users.push(user);
  }
  findAll() {
    return this.users;
  }
}

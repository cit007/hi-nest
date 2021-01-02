import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUser: CreateUserDto) {
    console.log('user controller:', createUser);
    return this.usersService.createUser(createUser);
  }

  @Get()
  getUserAll() {
    return this.usersService.findAll();
  }
}

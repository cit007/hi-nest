import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

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

  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  getUser(@Param('username') username: string, @Request() req: any) {
    console.log('return info from jwt.strategy.ts validate()', req);
    return this.usersService.findOne(username);
  }
}

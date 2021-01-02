import { Controller, ValidationPipe, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    console.log('user controller:', createUser);
    return this.authService.login(createUser);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser({ username, password }: CreateUserDto) {
    let isValid = false;
    try {
      const user = await this.usersService.findOne(username);
      if (user) {
        isValid = await bcrypt.compare(password, user.password);
      }
    } catch {
      console.log('EXCEPTION OCCURED');
    }

    console.log('### pwd is valid ?', isValid);
    return isValid;
  }

  async login(user: CreateUserDto) {
    if (await this.validateUser(user)) {
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('not authorized');
    }
  }
}

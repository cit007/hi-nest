import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [AuthController],
  // if JwtStrategy is in providers, auto new
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

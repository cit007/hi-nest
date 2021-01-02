import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MoviesModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://<user>:<pass>@cluster0.ei5es.mongodb.net/<dbname>?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

// make fake db
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`movie id${id} is not found`);
    }
    return movie;
  }

  deleteOne(id: string) {
    // getOne for exception message
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
  }

  udpate(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.create({ ...movie, ...updateData });
  }
}

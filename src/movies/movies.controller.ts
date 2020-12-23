import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    // return `This will create a movie : hidden data - ${movieData.name} ${movieData.age}`;
    return { ...movieData };
  }

  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `We search for a movie ${searchYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    // return `This will patch the ${movieId} : movie`;
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete the ${movieId} : movie`;
  }
}

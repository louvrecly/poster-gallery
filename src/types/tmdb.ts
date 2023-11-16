import Genre from './genre';
import { MovieData } from './movie';

export type MovieListResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieData[];
};

export type GenresResponse = {
  genres: Genre[];
};

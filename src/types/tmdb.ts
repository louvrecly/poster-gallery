import Genre from './genre';
import { MovieData } from './movie';

export type ErrorResponse = {
  status_code: number;
  status_message: string;
  success: boolean;
};

export type MovieListResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieData[];
};

export type GenresResponse = {
  genres: Genre[];
};

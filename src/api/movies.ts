import Genre from '../types/genre';
import { MovieData } from '../types/movie';

const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

type MovieListResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieData[];
};

const emptyMovieListResponse: MovieListResponse = {
  page: 1,
  total_pages: 1,
  total_results: 0,
  results: [],
};

export async function discoverMovies(
  keyword: string = '',
  genreId: number = -1,
  page: number = 1,
): Promise<MovieListResponse> {
  try {
    const res = await fetch(
      `${TMDB_API_URL}/3/discover/movie?api_key=${TMDB_API_KEY}&with_keywords=${keyword}&page=${page}${
        genreId > 0 ? `&with_genres=${genreId}` : ''
      }&sort_by=popularity.desc`,
    );
    return res.json();
  } catch (err) {
    console.log({ err });
    return emptyMovieListResponse;
  }
}

export async function searchMoviesByKeyword(
  keyword: string = '',
  page: number = 1,
): Promise<MovieListResponse> {
  try {
    const res = await fetch(
      `${TMDB_API_URL}/3/search/movie?api_key=${TMDB_API_KEY}&query=${keyword}&include_adult=false&language=en-US&page=${page}`,
    );

    return res.json();
  } catch (err) {
    console.log({ err });
    return emptyMovieListResponse;
  }
}

type GenresResponse = {
  genres: Genre[];
};

const emptyGenresResponse: GenresResponse = { genres: [] };

export async function getMovieGenres(): Promise<GenresResponse> {
  try {
    const res = await fetch(
      `${TMDB_API_URL}/3/genre/movie/list?api_key=${TMDB_API_KEY}`,
    );
    return res.json();
  } catch (err) {
    console.log({ err });
    return emptyGenresResponse;
  }
}

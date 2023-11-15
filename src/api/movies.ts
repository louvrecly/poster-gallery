import Genre from '../types/genre';
import { MovieData } from '../types/movie';

const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

type DiscoverResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieData[];
};

const emptyDiscoverResponse: DiscoverResponse = {
  page: 1,
  total_pages: 1,
  total_results: 0,
  results: [],
};

export async function discoverMovies(
  keyword: string = '',
  genreId: number = -1,
  page: number = 1,
): Promise<DiscoverResponse> {
  try {
    const res = await fetch(
      `${TMDB_API_URL}/3/discover/movie?sort_by=popularity.desc&api_key=${TMDB_API_KEY}&with_keywords=${keyword}&page=${page}${
        genreId > 0 ? `&with_genres=${genreId}` : ''
      }`,
    );
    return res.json();
  } catch (err) {
    console.log({ err });
    return emptyDiscoverResponse;
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

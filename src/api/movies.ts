import { GetGenresResponse, SearchMoviesResponse } from '../types/tmdb';

const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function searchMoviesByGenreId(
  genreId: number = -1,
  page: number = 1,
): Promise<SearchMoviesResponse> {
  const res = await fetch(
    `${TMDB_API_URL}/3/discover/movie?api_key=${TMDB_API_KEY}&page=${page}${
      genreId > 0 ? `&with_genres=${genreId}` : ''
    }&sort_by=popularity.desc`,
  );
  return res.json();
}

async function searchMoviesByKeyword(
  keyword: string = '',
  page: number = 1,
): Promise<SearchMoviesResponse> {
  const res = await fetch(
    `${TMDB_API_URL}/3/search/movie?api_key=${TMDB_API_KEY}&query=${keyword}&include_adult=false&include_video=false&language=en-US&page=${page}`,
  );
  return res.json();
}

export async function searchMovies(
  keyword: string = '',
  genreId: number = -1,
  page: number = 1,
) {
  if (keyword) return searchMoviesByKeyword(keyword, page);

  return searchMoviesByGenreId(genreId, page);
}

export async function getGenres(): Promise<GetGenresResponse> {
  const res = await fetch(
    `${TMDB_API_URL}/3/genre/movie/list?api_key=${TMDB_API_KEY}`,
  );
  return res.json();
}

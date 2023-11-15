import Genre, { GenreMap } from './genre';

export type MovieData = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;
  original_title: string;
  overview: string;
  video: boolean;
  adult: boolean;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
};

type Movie = {
  id: number;
  title: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: Date;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  video: boolean;
  adult: boolean;
  genres: Genre[];
  popularity: number;
  voteAverage: number;
  voteCount: number;
};

export function parseMovieData(genreMap: GenreMap) {
  return (movieData: MovieData): Movie => {
    const { genre_ids, ...rest } = movieData;

    return {
      ...rest,
      posterPath: rest.poster_path,
      backdropPath: rest.backdrop_path,
      releaseDate: new Date(rest.release_date),
      originalLanguage: rest.original_language,
      originalTitle: rest.original_title,
      voteAverage: rest.vote_average,
      voteCount: rest.vote_count,
      genres: genre_ids.map((id) => genreMap[id]),
    };
  };
}

export default Movie;

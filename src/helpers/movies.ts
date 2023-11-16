import Genre, { GenreMap } from '../types/genre';
import Movie, { MovieData } from '../types/movie';

export function isNotEmpty<Value>(
  value: Value | null | undefined,
): value is Value {
  if (value === null || value === undefined) return false;
  return true;
}

export function createGenreMap(genres: Genre[]): GenreMap {
  return genres.reduce(
    (subMap, genre) => ({ ...subMap, [genre.id]: genre }),
    {},
  );
}

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
      genres: genre_ids.map((id) => genreMap[id]).filter(isNotEmpty),
    };
  };
}

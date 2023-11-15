type Genre = {
  id: number;
  name: string;
};

export type GenreMap = Record<number, Genre>;

export function createGenreMap(genres: Genre[]): GenreMap {
  return genres.reduce(
    (subMap, genre) => ({ ...subMap, [genre.id]: genre }),
    {},
  );
}

export default Genre;

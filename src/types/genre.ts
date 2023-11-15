type Genre = {
  id: number;
  name: string;
};

export type GenreMap = Record<number, Genre>;

export default Genre;

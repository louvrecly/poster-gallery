import { Dispatch, SetStateAction, createContext } from 'react';
import Genre, { GenreMap } from '../types/genre';

export type GenresContextValues = {
  genres: Genre[];
  genreMap: GenreMap;
  isLoadingGenres: boolean;
  genreId: number;
  setGenreId: Dispatch<SetStateAction<number>>;
};

const initialValues: GenresContextValues = {
  genres: [],
  genreMap: {},
  isLoadingGenres: false,
  genreId: -1,
  setGenreId: () => null,
};

const GenresContext = createContext(initialValues);

export default GenresContext;

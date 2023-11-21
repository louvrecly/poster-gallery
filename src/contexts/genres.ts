import { createContext } from 'react';
import Genre, { GenreMap } from '../types/genre';

export type GenresContextValues = {
  genres: Genre[];
  genreMap: GenreMap;
  isLoadingGenres: boolean;
  selectedGenreIds: number[];
  toggleGenreId: (genreId: number) => void;
};

const initialValues: GenresContextValues = {
  genres: [],
  genreMap: {},
  isLoadingGenres: false,
  selectedGenreIds: [],
  toggleGenreId: () => null,
};

const GenresContext = createContext(initialValues);

export default GenresContext;

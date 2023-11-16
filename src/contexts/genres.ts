import { createContext } from 'react';
import Genre, { GenreMap } from '../types/genre';

export type GenresContextValues = {
  genres: Genre[];
  genreMap: GenreMap;
  isLoadingGenres: boolean;
};

const initialValues: GenresContextValues = {
  genres: [],
  genreMap: {},
  isLoadingGenres: false,
};

const GenresContext = createContext(initialValues);

export default GenresContext;

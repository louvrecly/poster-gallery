import { useMemo } from 'react';
import useGenres from './useGenres';
import useMovieData from './useMovieData';
import { parseMovieData } from '../types/movie';

const useSearchMovies = (keyword: string = '', genreId: number = -1) => {
  const { genreMap, isLoadingGenres } = useGenres();

  const {
    movieData,
    pageCount,
    currentPage,
    isLoadingMovieData,
    setCurrentPage,
  } = useMovieData(keyword, genreId);

  const isLoading = useMemo(
    () => isLoadingGenres || isLoadingMovieData,
    [isLoadingGenres, isLoadingMovieData],
  );

  const movies = useMemo(
    () => movieData.map(parseMovieData(genreMap)),
    [genreMap, movieData],
  );

  return {
    movies,
    pageCount,
    currentPage,
    genreMap,
    isLoading,
    isLoadingGenres,
    isLoadingMovieData,
    setCurrentPage,
  };
};

export default useSearchMovies;

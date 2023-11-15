import { useMemo } from 'react';
import useGenres from './useGenres';
import useMovieData from './useMovieData';
import { parseMovieData } from '../types/movie';

const useMoviesByGenreId = (genreId: number = -1) => {
  const { genreMap, isLoadingGenres } = useGenres();

  const {
    movieData,
    pageCount,
    currentPage,
    isLoadingMovieData,
    setCurrentPage,
  } = useMovieData(genreId);

  const isLoading = useMemo(
    () => isLoadingGenres || isLoadingMovieData,
    [isLoadingGenres, isLoadingMovieData],
  );

  const movies = useMemo(
    () => movieData.map(parseMovieData(genreMap)),
    [genreMap, movieData],
  );

  return { movies, pageCount, currentPage, isLoading, setCurrentPage };
};

export default useMoviesByGenreId;

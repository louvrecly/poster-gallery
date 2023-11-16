import { useMemo } from 'react';
import useGenres from './useGenres';
import useMovieData from './useMovieData';
import { parseMovieData } from '../helpers/movies';

const useSearchMovies = (
  keyword: string = '',
  genreId: number = -1,
  currentPage: number = 1,
) => {
  const { genres, genreMap, isLoadingGenres } = useGenres();

  const { movieData, pageCount, isLoadingMovieData } = useMovieData(
    keyword,
    genreId,
    currentPage,
  );

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
    genres,
    genreMap,
    isLoading,
    isLoadingGenres,
    isLoadingMovieData,
  };
};

export default useSearchMovies;

import { useMemo, useContext } from 'react';
import useMovieData from './useMovieData';
import { parseMovieData } from '../helpers/movies';
import GenresContext from '../contexts/genres';

const useSearchMovies = (
  keyword: string = '',
  genreId: number = -1,
  currentPage: number = 1,
) => {
  const { genreMap, isLoadingGenres } = useContext(GenresContext);

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
    isLoading,
    isLoadingGenres,
    isLoadingMovieData,
  };
};

export default useSearchMovies;

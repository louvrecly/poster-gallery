import { useMemo } from 'react';
import useGenres from './useGenres';
import useMovieData from './useMovieData';
import usePageQuery from './usePageQuery';
import { parseMovieData } from '../helpers/movies';

const useSearchMovies = (keyword: string = '', genreId: number = -1) => {
  const { genreMap, isLoadingGenres } = useGenres();
  const { currentPage, setCurrentPage } = usePageQuery();

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
    currentPage,
    genreMap,
    isLoading,
    isLoadingGenres,
    isLoadingMovieData,
    setCurrentPage,
  };
};

export default useSearchMovies;

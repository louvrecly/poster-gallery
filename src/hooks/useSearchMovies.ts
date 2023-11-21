import { useMemo, useContext } from 'react';
import useMovieData from './useMovieData';
import { parseMovieData } from '../helpers/movies';
import GenresContext from '../contexts/genres';
import useKeywordQuery from './useKeywordQuery';

const useSearchMovies = (currentPage: number = 1) => {
  const { keyword } = useKeywordQuery();
  const { genreMap, selectedGenreIds, isLoadingGenres } =
    useContext(GenresContext);

  const { movieData, pageCount, isLoadingMovieData } = useMovieData(
    keyword,
    selectedGenreIds,
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

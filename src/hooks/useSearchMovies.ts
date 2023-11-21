import { useMemo, useContext } from 'react';
import useMovieData from './useMovieData';
import { parseMovieData } from '../helpers/movies';
import GenresContext from '../contexts/genres';
import usePageQuery from './usePageQuery';
import KeywordContext from '../contexts/keyword';

const useSearchMovies = () => {
  const { keyword } = useContext(KeywordContext);
  const { genreMap, selectedGenreIds, isLoadingGenres } =
    useContext(GenresContext);
  const { currentPage, setCurrentPage } = usePageQuery();

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
    currentPage,
    isLoading,
    isLoadingGenres,
    isLoadingMovieData,
    setCurrentPage,
  };
};

export default useSearchMovies;

import { useEffect, useState } from 'react';
import { MovieData } from '../types/movie';
import { searchMovies } from '../api/movies';
import { useErrorBoundary } from 'react-error-boundary';

const useMovieData = (
  keyword: string = '',
  genreIds: number[] = [],
  currentPage: number = 1,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    setIsLoading(true);

    searchMovies(keyword, genreIds, currentPage)
      .then((res) => {
        setPageCount(res.total_pages);
        setMovieData(res.results);
      })
      .catch(showBoundary)
      .finally(() => setIsLoading(false));
  }, [currentPage, genreIds, keyword, showBoundary]);

  return {
    movieData,
    pageCount,
    isLoadingMovieData: isLoading,
  };
};

export default useMovieData;

import { useEffect, useState } from 'react';
import { MovieData } from '../types/movie';
import { searchMoviesByGenreId, searchMoviesByKeyword } from '../api/movies';
import { useErrorBoundary } from 'react-error-boundary';

const useMovieData = (
  keyword: string = '',
  genreId: number = -1,
  currentPage: number = 1,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [movieData, setMovieData] = useState<MovieData[]>([]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (!keyword && genreId === -1) return;

    setIsLoading(true);

    if (!keyword) {
      searchMoviesByGenreId(genreId, currentPage)
        .then((res) => {
          setPageCount(res.total_pages);
          setMovieData(res.results);
        })
        .catch(showBoundary)
        .finally(() => setIsLoading(false));
    } else {
      searchMoviesByKeyword(keyword, currentPage)
        .then((res) => {
          setPageCount(res.total_pages);
          setMovieData(res.results);
        })
        .catch(showBoundary)
        .finally(() => setIsLoading(false));
    }
  }, [currentPage, genreId, keyword, showBoundary]);

  return {
    movieData,
    pageCount,
    isLoadingMovieData: isLoading,
  };
};

export default useMovieData;

import { useEffect, useState } from 'react';
import { MovieData } from '../types/movie';
import { discoverMovies, searchMoviesByKeyword } from '../api/movies';

const useMovieData = (
  keyword: string = '',
  genreId: number = -1,
  currentPage: number = 1,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [movieData, setMovieData] = useState<MovieData[]>([]);

  useEffect(() => {
    if (!keyword && genreId === -1) return;

    setIsLoading(true);
    if (!keyword) {
      discoverMovies(keyword, genreId, currentPage).then((res) => {
        setPageCount(res.total_pages);
        setMovieData(res.results);
        setIsLoading(false);
      });
    } else {
      searchMoviesByKeyword(keyword, currentPage).then((res) => {
        setPageCount(res.total_pages);
        setMovieData(res.results);
        setIsLoading(false);
      });
    }
  }, [currentPage, genreId, keyword]);

  return {
    movieData,
    pageCount,
    isLoadingMovieData: isLoading,
  };
};

export default useMovieData;

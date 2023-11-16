import { useEffect, useState } from 'react';
import { MovieData } from '../types/movie';
import { discoverMovies } from '../api/movies';

const useMovieData = (
  keyword: string = '',
  genreId: number = -1,
  currentPage: number = 1,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [movieData, setMovieItems] = useState<MovieData[]>([]);

  useEffect(() => {
    setIsLoading(true);
    discoverMovies(keyword, genreId, currentPage).then((res) => {
      setPageCount(res.total_pages);
      setMovieItems(res.results);
      setIsLoading(false);
    });
  }, [currentPage, genreId, keyword]);

  return {
    movieData,
    pageCount,
    isLoadingMovieData: isLoading,
  };
};

export default useMovieData;

import { useEffect, useState } from 'react';
import { MovieData } from '../types/movie';
import { discoverMovies } from '../api/movies';

const useMovieData = (genreId: number = -1) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [movieData, setMovieItems] = useState<MovieData[]>([]);

  useEffect(() => {
    setIsLoading(true);
    discoverMovies(genreId, currentPage).then((res) => {
      setPageCount(res.total_pages);
      setMovieItems(res.results);
      setIsLoading(false);
    });
  }, [currentPage, genreId]);

  return {
    movieData,
    pageCount,
    currentPage,
    isLoadingMovieData: isLoading,
    setCurrentPage,
  };
};

export default useMovieData;

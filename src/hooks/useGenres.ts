import { useEffect, useMemo, useState } from 'react';
import { getMovieGenres } from '../api/movies';
import Genre from '../types/genre';
import { createGenreMap } from '../helpers/movies';

const useGenres = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);
  const genreMap = useMemo(() => createGenreMap(genres), [genres]);

  useEffect(() => {
    setIsLoading(true);
    getMovieGenres().then((res) => {
      setGenres(res.genres);
      setIsLoading(false);
    });
  }, []);

  return { genres, genreMap, isLoadingGenres: isLoading };
};

export default useGenres;

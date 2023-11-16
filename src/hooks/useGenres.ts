import { useEffect, useMemo, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { getGenres } from '../api/movies';
import Genre from '../types/genre';
import { createGenreMap } from '../helpers/movies';

const useGenres = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [genres, setGenres] = useState<Genre[]>([]);
  const genreMap = useMemo(() => createGenreMap(genres), [genres]);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    setIsLoading(true);
    getGenres()
      .then((res) => setGenres(res.genres))
      .catch(showBoundary)
      .finally(() => setIsLoading(false));
  }, [showBoundary]);

  return { genres, genreMap, isLoadingGenres: isLoading };
};

export default useGenres;

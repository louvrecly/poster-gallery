import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import parseGenreIdsParam from '../helpers/parseGenreIdsParam';
import { GenreMap } from '../types/genre';

const useGenresQuery = (genreMap: GenreMap, keyword: string = '') => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreIdsParam = searchParams.get('genres') ?? '';

  const selectedGenreIds = useMemo(
    () => (keyword ? [] : parseGenreIdsParam(genreMap, genreIdsParam)),
    [genreIdsParam, genreMap, keyword],
  );

  const toggleGenreId = useCallback(
    (genreId: number) => {
      setSearchParams((searchParams) => {
        if (selectedGenreIds.includes(genreId)) {
          searchParams.set(
            'genres',
            selectedGenreIds.filter((id) => id !== genreId).join(','),
          );
        } else {
          selectedGenreIds.push(genreId);
          searchParams.set('genres', selectedGenreIds.join(','));
        }

        searchParams.delete('keyword');
        searchParams.delete('page');
        return searchParams;
      });
    },
    [selectedGenreIds, setSearchParams],
  );

  const clearAllGenreIds = useCallback(
    () =>
      setSearchParams((searchParams) => {
        searchParams.delete('genres');
        searchParams.delete('keyword');
        searchParams.delete('page');
        return searchParams;
      }),
    [setSearchParams],
  );

  return { selectedGenreIds, toggleGenreId, clearAllGenreIds };
};

export default useGenresQuery;

import { ReactNode, useCallback, useMemo } from 'react';
import GenresContext from '../contexts/genres';
import useGenres from '../hooks/useGenres';
import { useSearchParams } from 'react-router-dom';
import parseGenreIdsParam from '../helpers/parseGenreIdsParam';

interface GenresProviderProps {
  children: ReactNode;
}

const GenresProvider = ({ children }: GenresProviderProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreIdsParam = searchParams.get('genres') ?? '';

  const { genres, genreMap, isLoadingGenres } = useGenres();

  const selectedGenreIds = useMemo(
    () => parseGenreIdsParam(genreMap, genreIdsParam),
    [genreIdsParam, genreMap],
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
        return searchParams;
      });
    },
    [selectedGenreIds, setSearchParams],
  );

  const clearAllGenreIds = useCallback(
    () =>
      setSearchParams((searchParams) => {
        searchParams.delete('genres');
        return searchParams;
      }),
    [setSearchParams],
  );

  return (
    <GenresContext.Provider
      value={{
        genres,
        genreMap,
        selectedGenreIds,
        isLoadingGenres,
        toggleGenreId,
        clearAllGenreIds,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export default GenresProvider;

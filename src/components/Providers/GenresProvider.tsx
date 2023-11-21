import { ReactNode, useContext } from 'react';
import GenresContext from '../../contexts/genres';
import useGenres from '../../hooks/useGenres';
import KeywordContext from '../../contexts/keyword';
import useGenresQuery from '../../hooks/useGenresQuery';

interface GenresProviderProps {
  children: ReactNode;
}

const GenresProvider = ({ children }: GenresProviderProps) => {
  const { keyword } = useContext(KeywordContext);
  const { genres, genreMap, isLoadingGenres } = useGenres();
  const { selectedGenreIds, toggleGenreId, clearAllGenreIds } = useGenresQuery(
    genreMap,
    keyword,
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

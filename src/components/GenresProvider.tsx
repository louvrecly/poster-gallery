import { ReactNode, useState } from 'react';
import GenresContext from '../contexts/genres';
import useGenres from '../hooks/useGenres';

interface GenresProviderProps {
  children: ReactNode;
}

const GenresProvider = ({ children }: GenresProviderProps) => {
  const { genres, genreMap, isLoadingGenres } = useGenres();
  const [genreId, setGenreId] = useState(-1);

  return (
    <GenresContext.Provider
      value={{ genres, genreMap, isLoadingGenres, genreId, setGenreId }}
    >
      {children}
    </GenresContext.Provider>
  );
};

export default GenresProvider;

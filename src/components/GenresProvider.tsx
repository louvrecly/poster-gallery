import { ReactNode } from 'react';
import GenresContext from '../contexts/genres';
import useGenres from '../hooks/useGenres';

interface GenresProviderProps {
  children: ReactNode;
}

const GenresProvider = ({ children }: GenresProviderProps) => {
  const { genres, genreMap, isLoadingGenres } = useGenres();

  return (
    <GenresContext.Provider value={{ genres, genreMap, isLoadingGenres }}>
      {children}
    </GenresContext.Provider>
  );
};

export default GenresProvider;

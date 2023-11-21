import { useContext } from 'react';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import GenreList from './GenreList';
import GenresContext from '../contexts/genres';

const GenreControl = () => {
  const { genres, selectedGenreIds, clearAllGenreIds } =
    useContext(GenresContext);

  return (
    <Stack spacing={1}>
      <Chip
        label="Clear All Genres"
        variant="filled"
        color="success"
        size="small"
        disabled={!selectedGenreIds.length}
        onClick={clearAllGenreIds}
      />

      <GenreList genres={genres} justifyContent="center" />
    </Stack>
  );
};

export default GenreControl;

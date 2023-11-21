import { useContext } from 'react';
import { StackProps } from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import GenreListContainer from './Container';
import Genre from '../../types/genre';
import GenresContext from '../../contexts/genres';

interface GenreListProps extends StackProps {
  genres: Genre[];
}

const GenreList = ({ genres, ...props }: GenreListProps) => {
  const { selectedGenreIds, toggleGenreId } = useContext(GenresContext);

  return (
    <GenreListContainer {...props}>
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          variant={selectedGenreIds.includes(genre.id) ? 'filled' : 'outlined'}
          color="success"
          size="small"
          onClick={() => toggleGenreId(genre.id)}
        />
      ))}
    </GenreListContainer>
  );
};

export default GenreList;

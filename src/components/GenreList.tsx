import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import StyledButton from './StyledButton';
import Genre from '../types/genre';

interface GenreListProps {
  genres: Genre[];
  genreId?: number;
  justifyContent?: string;
}

const GenreList = ({
  genres,
  genreId = -1,
  justifyContent = 'auto',
}: GenreListProps) => {
  return (
    <Stack
      direction="row"
      justifyContent={justifyContent}
      spacing={1}
      flexWrap="wrap"
      useFlexGap
    >
      {genres.map((genre) => (
        <StyledButton
          key={genre.id}
          variant="outlined"
          color="success"
          size="small"
          component={Link}
          to={`/genre/${genre.id}`}
          disabled={genre.id === genreId}
          sx={{ py: 0, typography: 'body2' }}
        >
          {genre.name}
        </StyledButton>
      ))}
    </Stack>
  );
};

export default GenreList;

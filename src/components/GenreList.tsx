import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Genre from '../types/genre';

interface GenreListProps {
  genres: Genre[];
  genreId?: number;
}

const GenreList = ({ genres, genreId = -1 }: GenreListProps) => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant={genre.id === genreId ? 'contained' : 'outlined'}
          size="small"
          component={Link}
          to={`/genre/${genre.id}`}
          disabled={genre.id === genreId}
          sx={{ py: 0, typography: 'body2' }}
        >
          {genre.name}
        </Button>
      ))}
    </Stack>
  );
};

export default GenreList;

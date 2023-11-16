import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Genre from '../types/genre';

interface GenreListProps {
  genres: Genre[];
}

const GenreList = ({ genres }: GenreListProps) => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant="contained"
          color="success"
          size="small"
          component={Link}
          to={`/genre/${genre.id}`}
        >
          {genre.name}
        </Button>
      ))}
    </Stack>
  );
};

export default GenreList;

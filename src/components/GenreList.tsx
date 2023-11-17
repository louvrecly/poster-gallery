import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Genre from '../types/genre';
import Chip from '@mui/material/Chip';

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
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      justifyContent={justifyContent}
      spacing={1}
      flexWrap="wrap"
      useFlexGap
    >
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          variant="outlined"
          color="success"
          size="small"
          disabled={genre.id === genreId}
          onClick={() => navigate(`/genre/${genre.id}`)}
        />
      ))}
    </Stack>
  );
};

export default GenreList;

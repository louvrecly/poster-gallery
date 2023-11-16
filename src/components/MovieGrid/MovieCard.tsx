import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Genre from '../../types/genre';
import GenreList from '../GenreList';
import GenresContext from '../../contexts/genres';

const TMDB_IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: Date;
  genres: Genre[];
  originalLanguage: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
}

const MovieCard = ({
  title,
  posterPath,
  releaseDate,
  genres,
  originalLanguage,
  overview,
  voteAverage,
  voteCount,
}: MovieCardProps) => {
  const { genreId } = useContext(GenresContext);

  return (
    <Card
      raised
      sx={{ backgroundColor: 'grey.900', color: 'background.paper' }}
    >
      <CardMedia
        image={`${TMDB_IMAGE_URL}/t/p/w500${posterPath}`}
        sx={{ pt: '150%' }}
      />

      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{title}</Typography>

          <Typography variant="body2">
            {releaseDate.toLocaleDateString()}
          </Typography>

          <GenreList genres={genres} genreId={genreId} />

          <Typography variant="body2">
            Original Language: {originalLanguage.toUpperCase()}
          </Typography>

          <Typography
            variant="caption"
            fontWeight="light"
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            Overview: {overview}
          </Typography>

          <Typography variant="body2">
            Rating: {voteAverage} / 10 ({voteCount} votes)
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

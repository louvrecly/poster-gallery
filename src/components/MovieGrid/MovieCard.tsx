import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Genre from '../../types/genre';

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
  return (
    <Card raised>
      <CardMedia
        image={`${TMDB_IMAGE_URL}/t/p/w500${posterPath}`}
        sx={{ pt: '56.25%' }}
      />

      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{title}</Typography>

          <Typography variant="subtitle2">
            {releaseDate.toLocaleDateString()}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {genres.map((genre) => (
              <Link
                key={genre.id}
                component={RouterLink}
                to={`/genre/${genre.id}`}
              >
                <Typography variant="subtitle2">{genre.name}</Typography>
              </Link>
            ))}
          </Stack>

          <Typography variant="subtitle2">
            Original Language: {originalLanguage.toUpperCase()}
          </Typography>

          <Typography variant="subtitle2">Overview: {overview}</Typography>

          <Typography variant="subtitle2">
            Rating: {voteAverage} / 10 ({voteCount} votes)
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

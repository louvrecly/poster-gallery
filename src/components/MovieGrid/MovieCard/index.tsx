import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MovieCardContainer from './Container';
import InfoBlock from './InfoBlock';
import GenreList from '../../GenreList';
import Genre from '../../../types/genre';

const TMDB_IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: Date;
  originalLanguage: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  genres: Genre[];
}

const MovieCard = ({
  title,
  posterPath,
  releaseDate,
  originalLanguage,
  overview,
  voteAverage,
  voteCount,
  genres,
}: MovieCardProps) => {
  return (
    <MovieCardContainer>
      <CardMedia
        image={`${TMDB_IMAGE_URL}/t/p/w500${posterPath}`}
        sx={{ pt: '150%' }}
      />

      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{title}</Typography>

          <InfoBlock
            voteAverage={voteAverage}
            voteCount={voteCount}
            releaseDate={releaseDate}
            originalLanguage={originalLanguage}
          />

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
            {overview}
          </Typography>

          <GenreList genres={genres} />
        </Stack>
      </CardContent>
    </MovieCardContainer>
  );
};

export default MovieCard;

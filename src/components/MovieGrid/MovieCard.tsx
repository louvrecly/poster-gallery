import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const TMDB_IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: Date;
  originalLanguage: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
}

const MovieCard = ({
  title,
  posterPath,
  releaseDate,
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
        <Typography variant="h6">{title}</Typography>

        <Typography variant="subtitle2">
          {releaseDate.toLocaleDateString()}
        </Typography>

        <Typography variant="subtitle2">
          Original Language: {originalLanguage.toUpperCase()}
        </Typography>

        <Typography variant="subtitle2">Overview: {overview}</Typography>

        <Typography variant="subtitle2">
          Rating: {voteAverage} / 10 ({voteCount} votes)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
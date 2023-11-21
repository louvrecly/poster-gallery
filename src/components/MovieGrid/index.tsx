import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';
import Movie from '../../types/movie';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  if (!movies.length)
    return (
      <Container>
        <Typography variant="h6" align="center">
          No movie found.
        </Typography>
      </Container>
    );

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={3}>
          <MovieCard
            title={movie.title}
            posterPath={movie.posterPath}
            releaseDate={movie.releaseDate}
            originalLanguage={movie.originalLanguage}
            overview={movie.overview}
            voteAverage={movie.voteAverage}
            voteCount={movie.voteCount}
            genres={movie.genres}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;

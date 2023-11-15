import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';
import Movie from '../../types/movie';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={3}>
          <MovieCard
            title={movie.title}
            posterPath={movie.posterPath}
            releaseDate={movie.releaseDate}
            genres={movie.genres}
            originalLanguage={movie.originalLanguage}
            overview={movie.overview}
            voteAverage={movie.voteAverage}
            voteCount={movie.voteCount}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;

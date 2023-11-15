import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';
import { MovieData } from '../../types/movie';

interface MovieGridProps {
  movies: MovieData[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.id} item xs={12} sm={6} md={3}>
          <MovieCard
            title={movie.title}
            posterPath={movie.poster_path}
            releaseDate={new Date(movie.release_date)}
            overview={movie.overview}
            originalLanguage={movie.original_language}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;

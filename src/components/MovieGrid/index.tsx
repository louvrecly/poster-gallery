import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MovieGridContainer from './Container';
import MovieGridItemContainer from './ItemContainer';
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
    <MovieGridContainer>
      {movies.map((movie) => (
        <MovieGridItemContainer key={movie.id}>
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
        </MovieGridItemContainer>
      ))}
    </MovieGridContainer>
  );
};

export default MovieGrid;

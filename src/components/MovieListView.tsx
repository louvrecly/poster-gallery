import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MovieGrid from './MovieGrid';
import PageControl from './PageControl';
import Movie from '../types/movie';
import GenreList from './GenreList';
import Genre from '../types/genre';

interface MovieListViewProps {
  movies: Movie[];
  isLoading: boolean;
  currentPage: number;
  pageCount: number;
  genres: Genre[];
  genreId?: number;
  navigateToPage: (page: number) => void;
}

const MovieListView = ({
  movies,
  isLoading,
  currentPage,
  pageCount,
  genres,
  genreId = -1,
  navigateToPage,
}: MovieListViewProps) => {
  return (
    <>
      <GenreList genres={genres} genreId={genreId} />

      <Container
        disableGutters
        sx={{
          py: 2,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {isLoading ? (
          <Typography variant="subtitle1" align="center">
            Loading...
          </Typography>
        ) : (
          <MovieGrid movies={movies} genreId={genreId} />
        )}
      </Container>

      <PageControl
        currentPage={currentPage}
        pageCount={pageCount}
        navigateToPage={navigateToPage}
      />
    </>
  );
};

export default MovieListView;

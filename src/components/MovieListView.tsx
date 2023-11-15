import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MovieGrid from './MovieGrid';
import PageControl from './PageControl';
import Movie from '../types/movie';

interface MovieListViewProps {
  movies: Movie[];
  isLoading: boolean;
  currentPage: number;
  pageCount: number;
  setCurrentPage: (page: number) => void;
}

const MovieListView = ({
  movies,
  isLoading,
  currentPage,
  pageCount,
  setCurrentPage,
}: MovieListViewProps) => {
  return (
    <>
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
          <MovieGrid movies={movies} />
        )}
      </Container>

      <PageControl
        currentPage={currentPage}
        pageCount={pageCount}
        navigateToPage={setCurrentPage}
      />
    </>
  );
};

export default MovieListView;

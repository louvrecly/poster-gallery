import { useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MovieGrid from './MovieGrid';
import PageControl from './PageControl';
import Movie from '../types/movie';
import GenreList from './GenreList';
import GenresContext from '../contexts/genres';

interface MovieListViewProps {
  movies: Movie[];
  isLoading: boolean;
  currentPage: number;
  pageCount: number;
  navigateToPage: (page: number) => void;
}

const MovieListView = ({
  movies,
  isLoading,
  currentPage,
  pageCount,
  navigateToPage,
}: MovieListViewProps) => {
  const { genres, genreId } = useContext(GenresContext);

  return (
    <>
      <GenreList genres={genres} genreId={genreId} justifyContent="center" />

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
          <Typography variant="h6" align="center">
            Loading...
          </Typography>
        ) : (
          <MovieGrid movies={movies} />
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

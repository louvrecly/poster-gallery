import Container from '@mui/material/Container';
import GenreControl from '../components/GenreControl';
import MovieGridLoading from '../components/MovieGrid/Loading';
import MovieGrid from '../components/MovieGrid';
import PageControl from '../components/PageControl';
import useSearchMovies from '../hooks/useSearchMovies';

const Home = () => {
  const { movies, pageCount, currentPage, isLoading, setCurrentPage } =
    useSearchMovies();

  return (
    <>
      <GenreControl />

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
        {isLoading ? <MovieGridLoading /> : <MovieGrid movies={movies} />}
      </Container>

      <PageControl
        currentPage={currentPage}
        pageCount={pageCount}
        navigateToPage={setCurrentPage}
      />
    </>
  );
};

export default Home;

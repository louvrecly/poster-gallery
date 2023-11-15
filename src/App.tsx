import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NavBar from './components/NavBar';
import MovieGrid from './components/MovieGrid';
import PageControl from './components/PageControl';
import { discoverMovies } from './api/movies';
import { MovieData } from './types/movie';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    setIsLoading(true);
    discoverMovies(currentPage).then((res) => {
      const { results, total_pages } = res;

      setPageCount(total_pages);
      setMovies(results);
      setIsLoading(false);
    });
  }, [currentPage]);

  return (
    <>
      <CssBaseline />

      <NavBar />

      <Container
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
}

export default App;

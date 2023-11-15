import { useEffect, useMemo, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NavBar from './components/NavBar';
import MovieGrid from './components/MovieGrid';
import PageControl from './components/PageControl';
import { discoverMovies, getMovieGenres } from './api/movies';
import { MovieData, parseMovieData } from './types/movie';
import Genre, { createGenreMap } from './types/genre';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [movieItems, setMovieItems] = useState<MovieData[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  const genreMap = useMemo(() => createGenreMap(genres), [genres]);

  const movies = useMemo(() => {
    if (!movieItems.length || !Object.keys(genreMap).length) return [];

    return movieItems.map(parseMovieData(genreMap));
  }, [genreMap, movieItems]);

  useEffect(() => {
    setIsLoading(true);
    discoverMovies(currentPage).then((res) => {
      setPageCount(res.total_pages);
      setMovieItems(res.results);
      setIsLoading(false);
    });
  }, [currentPage]);

  useEffect(() => {
    getMovieGenres().then((res) => {
      setGenres(res.genres);
    });
  }, []);

  return (
    <>
      <CssBaseline />

      <NavBar />

      <Container
        maxWidth="lg"
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

      <Container maxWidth="lg">
        <PageControl
          currentPage={currentPage}
          pageCount={pageCount}
          navigateToPage={setCurrentPage}
        />
      </Container>
    </>
  );
}

export default App;

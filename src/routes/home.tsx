import { useMemo } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MovieGrid from '../components/MovieGrid';
import PageControl from '../components/PageControl';
import useGenres from '../hooks/useGenres';
import useMovieData from '../hooks/useMovieData';
import { parseMovieData } from '../types/movie';

const Home = () => {
  const { genreMap, isLoadingGenres } = useGenres();
  const {
    movieData,
    pageCount,
    currentPage,
    isLoadingMovieData,
    setCurrentPage,
  } = useMovieData();

  const isLoading = useMemo(
    () => isLoadingGenres || isLoadingMovieData,
    [isLoadingGenres, isLoadingMovieData],
  );

  const movies = useMemo(() => {
    if (!movieData.length || !Object.keys(genreMap).length) return [];

    return movieData.map(parseMovieData(genreMap));
  }, [genreMap, movieData]);

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

export default Home;

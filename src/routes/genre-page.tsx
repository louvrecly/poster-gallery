import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useGenres from '../hooks/useGenres';
import useMovieData from '../hooks/useMovieData';
import { parseMovieData } from '../types/movie';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MovieGrid from '../components/MovieGrid';
import PageControl from '../components/PageControl';

type GenrePageParams = {
  genreId: string;
};

const GenrePage = () => {
  const params = useParams<GenrePageParams>();
  const genreId = parseInt(params.genreId ?? '');

  const { genreMap, isLoadingGenres } = useGenres();

  const {
    movieData,
    pageCount,
    currentPage,
    isLoadingMovieData,
    setCurrentPage,
  } = useMovieData(genreId);

  const isLoading = useMemo(
    () => isLoadingGenres || isLoadingMovieData,
    [isLoadingGenres, isLoadingMovieData],
  );

  const movies = useMemo(
    () => movieData.map(parseMovieData(genreMap)),
    [genreMap, movieData],
  );

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

export default GenrePage;

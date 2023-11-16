import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';
import NotFound from './not-found';

type GenrePageParams = {
  genreId: string;
};

const GenrePage = () => {
  const params = useParams<GenrePageParams>();
  const genreId = parseInt(params.genreId ?? '');

  const {
    movies,
    pageCount,
    currentPage,
    genreMap,
    isLoading,
    isLoadingGenres,
    setCurrentPage,
  } = useSearchMovies('', genreId);

  const genre = useMemo(() => genreMap[genreId], [genreId, genreMap]);

  if (!isLoadingGenres && !genre) return <NotFound />;

  return (
    <>
      <Typography variant="h6" sx={{ pt: 2 }}>
        {isLoadingGenres ? 'Loading...' : `Genre - ${genre.name}`}
      </Typography>

      <MovieListView
        movies={movies}
        isLoading={isLoading}
        currentPage={currentPage}
        pageCount={pageCount}
        navigateToPage={setCurrentPage}
      />
    </>
  );
};

export default GenrePage;

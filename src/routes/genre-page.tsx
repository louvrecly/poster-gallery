import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';

type GenrePageParams = {
  genreId: string;
};

const GenrePage = () => {
  const params = useParams<GenrePageParams>();
  const genreId = parseInt(params.genreId ?? '');

  const navigate = useNavigate();

  const {
    movies,
    currentPage,
    pageCount,
    genreMap,
    isLoading,
    isLoadingGenres,
    setCurrentPage,
  } = useSearchMovies('', genreId);

  const genre = useMemo(() => genreMap[genreId], [genreId, genreMap]);

  if (!isLoadingGenres && !genre) return navigate('/');

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
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default GenrePage;

import { useMemo, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';
import NotFound from './not-found';
import usePageQuery from '../hooks/usePageQuery';
import GenresContext from '../contexts/genres';

type GenrePageParams = {
  genreId: string;
};

const GenrePage = () => {
  const params = useParams<GenrePageParams>();
  const genreId = parseInt(params.genreId ?? '-1');
  const { genreMap, setGenreId } = useContext(GenresContext);
  const { currentPage, setCurrentPage } = usePageQuery();

  const { movies, pageCount, isLoading, isLoadingGenres } = useSearchMovies(
    '',
    genreId,
  );

  const genre = useMemo(() => genreMap[genreId], [genreId, genreMap]);

  useEffect(() => {
    setGenreId(genreId);
  }, [genreId, setGenreId]);

  if (!isLoadingGenres && !genre) return <NotFound />;

  return (
    <>
      <Typography variant="h6" sx={{ pb: 1 }}>
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

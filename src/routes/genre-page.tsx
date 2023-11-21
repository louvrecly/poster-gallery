import { useMemo, useContext } from 'react';
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
  const { genreMap } = useContext(GenresContext);
  const { currentPage, setCurrentPage } = usePageQuery();

  const { movies, pageCount, isLoading, isLoadingGenres } =
    useSearchMovies(currentPage);

  const genre = useMemo(() => genreMap[genreId], [genreId, genreMap]);

  if (!isLoadingGenres && !genre) return <NotFound />;

  return (
    <>
      <Typography variant="h4" sx={{ pb: 1 }} align="center">
        Genre - {isLoadingGenres ? 'Loading...' : genre.name}
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

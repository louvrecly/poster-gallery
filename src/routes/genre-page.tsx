import { useParams } from 'react-router-dom';
import useMoviesByGenreId from '../hooks/useMoviesByGenreId';
import MovieListView from '../components/MovieListView';

type GenrePageParams = {
  genreId: string;
};

const GenrePage = () => {
  const params = useParams<GenrePageParams>();
  const genreId = parseInt(params.genreId ?? '');
  const { movies, currentPage, pageCount, isLoading, setCurrentPage } =
    useMoviesByGenreId(genreId);

  return (
    <MovieListView
      movies={movies}
      isLoading={isLoading}
      currentPage={currentPage}
      pageCount={pageCount}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default GenrePage;

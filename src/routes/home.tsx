import useMoviesByGenreId from '../hooks/useMoviesByGenreId';
import MovieListView from '../components/MovieListView';

const Home = () => {
  const { movies, currentPage, pageCount, isLoading, setCurrentPage } =
    useMoviesByGenreId();

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

export default Home;

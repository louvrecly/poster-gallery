import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';

const Home = () => {
  const { movies, pageCount, currentPage, isLoading, setCurrentPage } =
    useSearchMovies();

  return (
    <MovieListView
      movies={movies}
      isLoading={isLoading}
      currentPage={currentPage}
      pageCount={pageCount}
      navigateToPage={setCurrentPage}
    />
  );
};

export default Home;

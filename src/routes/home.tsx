import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';
import usePageQuery from '../hooks/usePageQuery';

const Home = () => {
  const { currentPage, setCurrentPage } = usePageQuery();

  const { movies, pageCount, isLoading } = useSearchMovies(currentPage);

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

import { useSearchParams } from 'react-router-dom';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';

const Home = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const { movies, currentPage, pageCount, isLoading, setCurrentPage } =
    useSearchMovies(keyword ?? '');

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

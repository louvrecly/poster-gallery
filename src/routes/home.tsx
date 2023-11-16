import { useSearchParams } from 'react-router-dom';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';

const Home = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const { movies, pageCount, currentPage, isLoading, setCurrentPage } =
    useSearchMovies(keyword ?? '', -1);

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

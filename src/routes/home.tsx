import { useSearchParams } from 'react-router-dom';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';
import usePageQuery from '../hooks/usePageQuery';

const Home = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';
  const { currentPage, setCurrentPage } = usePageQuery();

  const { movies, pageCount, isLoading, genres } = useSearchMovies(
    keyword,
    -1,
    currentPage,
  );

  return (
    <MovieListView
      movies={movies}
      isLoading={isLoading}
      currentPage={currentPage}
      pageCount={pageCount}
      genres={genres}
      navigateToPage={setCurrentPage}
    />
  );
};

export default Home;

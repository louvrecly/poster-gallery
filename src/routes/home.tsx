import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearchMovies from '../hooks/useSearchMovies';
import MovieListView from '../components/MovieListView';
import usePageQuery from '../hooks/usePageQuery';
import GenresContext from '../contexts/genres';

const Home = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';
  const { currentPage, setCurrentPage } = usePageQuery();
  const { setGenreId } = useContext(GenresContext);

  const { movies, pageCount, isLoading } = useSearchMovies(
    keyword,
    -1,
    currentPage,
  );

  useEffect(() => {
    setGenreId(-1);
  }, [setGenreId]);

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

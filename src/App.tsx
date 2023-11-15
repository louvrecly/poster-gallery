import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import PageControl from './components/PageControl';
import { discoverMovies } from './api/movies';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [movies, setMovies] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    setIsLoading(true);
    discoverMovies(currentPage).then((res) => {
      const { results, total_pages } = res;

      setPageCount(total_pages);
      setMovies(results);
      setIsLoading(false);
    });
  }, [currentPage]);

  return (
    <>
      <CssBaseline />

      <NavBar />

      <div>{isLoading ? 'Loading' : JSON.stringify(movies)}</div>

      <PageControl
        currentPage={currentPage}
        pageCount={pageCount}
        navigateToPage={setCurrentPage}
      />
    </>
  );
}

export default App;

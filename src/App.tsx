import { useEffect, useState } from 'react';
import Icon from '@mui/material/Icon';
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
      <h1>
        <Icon fontSize="large">movie</Icon> Poster Gallery
      </h1>

      <div>{isLoading ? 'Loading' : JSON.stringify(movies)}</div>

      <div>
        <button
          onClick={() => currentPage > 1 && setCurrentPage((page) => page - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        {currentPage} / {pageCount}
        <button
          onClick={() =>
            currentPage < pageCount && setCurrentPage((page) => page + 1)
          }
          disabled={currentPage >= pageCount}
        >
          next
        </button>
      </div>
    </>
  );
}

export default App;

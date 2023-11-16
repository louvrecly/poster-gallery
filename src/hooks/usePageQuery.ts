import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePageQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') ?? '1');

  const setCurrentPage = useCallback(
    (page: number) => {
      setSearchParams((searchParams) => {
        searchParams.set('page', page.toString());
        return searchParams;
      });
    },
    [setSearchParams],
  );
  return { currentPage, setCurrentPage };
};

export default usePageQuery;

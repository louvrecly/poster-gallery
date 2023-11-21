import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const useKeywordQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = useMemo(
    () => searchParams.get('keyword') ?? '',
    [searchParams],
  );

  const setKeywordParam = useCallback(
    (keyword: string) =>
      setSearchParams((searchParams) => {
        if (keyword) searchParams.set('keyword', keyword);
        else searchParams.delete('keyword');

        searchParams.delete('genres');
        searchParams.delete('page');
        return searchParams;
      }),
    [setSearchParams],
  );

  return { keyword, setKeywordParam };
};

export default useKeywordQuery;

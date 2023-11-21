import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const useKeywordQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const setKeywordParam = useCallback(
    (keyword: string) =>
      setSearchParams((searchParams) => {
        if (keyword) searchParams.set('keyword', keyword);
        else searchParams.delete('keyword');

        return searchParams;
      }),
    [setSearchParams],
  );

  return { keyword, setKeywordParam };
};

export default useKeywordQuery;

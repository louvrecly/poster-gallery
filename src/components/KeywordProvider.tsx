import { ReactNode } from 'react';
import KeywordContext from '../contexts/keyword';
import useKeywordQuery from '../hooks/useKeywordQuery';

interface KeywordProviderProps {
  children: ReactNode;
}

const KeywordProvider = ({ children }: KeywordProviderProps) => {
  const { keyword, setKeywordParam } = useKeywordQuery();

  return (
    <KeywordContext.Provider value={{ keyword, setKeywordParam }}>
      {children}
    </KeywordContext.Provider>
  );
};

export default KeywordProvider;

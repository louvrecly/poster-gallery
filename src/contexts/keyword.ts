import { createContext } from 'react';

export type KeywordContextValues = {
  keyword: string;
  setKeywordParam: (keyword: string) => void;
};

const initialValues: KeywordContextValues = {
  keyword: '',
  setKeywordParam: () => null,
};

const KeywordContext = createContext(initialValues);

export default KeywordContext;

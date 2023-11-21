import { FormEvent, useContext } from 'react';
import Stack from '@mui/material/Stack';
import StyledTextField from './StyledTextField';
import Icon from '@mui/material/Icon';
import StyledButton from './StyledButton';
import KeywordContext from '../contexts/keyword';

type SearchBarSubmitEvent = FormEvent<HTMLFormElement> & {
  target: HTMLFormElement & { 0: HTMLInputElement };
};

const SearchBar = () => {
  const { keyword, setKeywordParam } = useContext(KeywordContext);

  const handleSubmit = (event: SearchBarSubmitEvent) => {
    event.preventDefault();
    const { value } = event.target[0];
    setKeywordParam(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <StyledTextField
          id="keyword"
          label="Search"
          variant="outlined"
          color="warning"
          defaultValue={keyword}
        />

        <StyledButton
          variant="outlined"
          color="warning"
          type="submit"
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <Icon>search</Icon>
        </StyledButton>
      </Stack>
    </form>
  );
};

export default SearchBar;

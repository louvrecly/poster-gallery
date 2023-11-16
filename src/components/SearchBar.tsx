import { FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

type SearchBarSubmitEvent = FormEvent<HTMLFormElement> & {
  target: HTMLFormElement & { 0: HTMLInputElement };
};

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';

  const navigate = useNavigate();

  const handleSubmit = (event: SearchBarSubmitEvent) => {
    event.preventDefault();
    const { value } = event.target[0];
    navigate(value ? `/?keyword=${value}` : '/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row">
        <TextField
          id="keyword"
          label="Search"
          variant="outlined"
          color="warning"
          defaultValue={keyword}
          sx={{
            '& input': {
              color: 'background.paper',
            },
            '& fieldset': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
        />

        <Button
          // variant="contained"
          variant="outlined"
          color="warning"
          type="submit"
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <Icon>search</Icon>
        </Button>
      </Stack>
    </form>
  );
};

export default SearchBar;

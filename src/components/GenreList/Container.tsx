import Stack, { StackProps } from '@mui/material/Stack';

const GenreListContainer = (props: StackProps) => {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap {...props} />
  );
};

export default GenreListContainer;

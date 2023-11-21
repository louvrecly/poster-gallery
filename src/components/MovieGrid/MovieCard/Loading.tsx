import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import CardContent from '@mui/material/CardContent';
import MovieCardContainer from './Container';
import InfoBlockLoading from './InfoBlock/Loading';
import GenreListLoading from '../../GenreList/Loading';

const MovieCardLoading = () => {
  return (
    <MovieCardContainer>
      <Stack>
        <Skeleton variant="rectangular" sx={{ pt: '150%' }} />

        <CardContent>
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ typography: 'h6' }} />

            <InfoBlockLoading />

            <Skeleton variant="text" sx={{ typography: 'caption' }} />

            <Skeleton variant="text" sx={{ typography: 'caption' }} />

            <Skeleton variant="text" sx={{ typography: 'caption' }} />

            <Skeleton variant="text" sx={{ typography: 'caption' }} />

            <Skeleton variant="text" sx={{ typography: 'caption' }} />

            <GenreListLoading />
          </Stack>
        </CardContent>
      </Stack>
    </MovieCardContainer>
  );
};

export default MovieCardLoading;

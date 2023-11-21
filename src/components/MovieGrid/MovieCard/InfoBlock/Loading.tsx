import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import InfoBlockContainer from './Container';

const InfoBlockLoading = () => {
  return (
    <InfoBlockContainer>
      <Skeleton variant="circular" width={80} height={80} />

      <Stack spacing={1} flexGrow={1}>
        <Skeleton variant="text" sx={{ typography: 'body2' }} />

        <Skeleton variant="text" sx={{ typography: 'body2' }} />
      </Stack>
    </InfoBlockContainer>
  );
};

export default InfoBlockLoading;

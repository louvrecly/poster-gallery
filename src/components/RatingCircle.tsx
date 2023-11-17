import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface RatingCircleProps {
  value: number;
  maxValue: number;
  count: number;
}

const RatingCircle = ({ value, maxValue, count }: RatingCircleProps) => {
  const rating = 100 * (value / maxValue);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
      }}
    >
      <CircularProgress
        variant={count > 0 ? 'determinate' : 'indeterminate'}
        value={rating}
        color="success"
        size={80}
        thickness={1.5}
      />

      <Stack alignItems="center" maxWidth={70} sx={{ position: 'absolute' }}>
        <Stack direction="row" alignItems="baseline">
          <Typography variant="h6" lineHeight={1}>
            {value}
          </Typography>
          <Typography variant="caption" lineHeight={1}>
            /{maxValue}
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          lineHeight={1}
          component="sub"
          sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
        >
          {count} votes
        </Typography>
      </Stack>
    </Box>
  );
};

export default RatingCircle;

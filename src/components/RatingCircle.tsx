import { useMemo } from 'react';
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
  const rating = useMemo(() => 100 * (value / maxValue), [maxValue, value]);
  const color = useMemo(() => {
    if (rating >= 70) return 'success';
    if (rating >= 50) return 'warning';
    return 'error';
  }, [rating]);

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
        color={color}
        size={80}
        thickness={1.5}
      />

      <Stack alignItems="center" maxWidth={60} sx={{ position: 'absolute' }}>
        <Stack direction="row" alignItems="baseline">
          <Typography
            variant="h6"
            lineHeight={1}
            sx={{ color: `${color}.main` }}
          >
            {value.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 1,
            })}
          </Typography>
          <Typography variant="caption" lineHeight={1}>
            /{maxValue}
          </Typography>
        </Stack>

        <Typography
          variant="caption"
          lineHeight={1}
          component="sub"
          width="100%"
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {count} votes
        </Typography>
      </Stack>
    </Box>
  );
};

export default RatingCircle;

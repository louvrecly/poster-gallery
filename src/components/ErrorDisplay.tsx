import { FallbackProps } from 'react-error-boundary';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ErrorResponse } from '../types/tmdb';

interface ErrorDisplayProps extends FallbackProps {
  error: Error & ErrorResponse;
}

const ErrorDisplay = ({ error, resetErrorBoundary }: ErrorDisplayProps) => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1 }}
    >
      <Typography variant="h6" align="center">
        Error: {error.message ?? error.status_message ?? ''}
      </Typography>

      <Button variant="outlined" color="warning" onClick={resetErrorBoundary}>
        Reload
      </Button>
    </Stack>
  );
};

export default ErrorDisplay;

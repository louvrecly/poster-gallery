import { useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ErrorResponse } from '../types/tmdb';

interface ErrorDisplayProps {
  error: Error | ErrorResponse;
  actionText?: string;
  onButtonClicked?: () => void;
}

const ErrorDisplay = ({
  error,
  actionText = 'Reload',
  onButtonClicked,
}: ErrorDisplayProps) => {
  const errorMessage = useMemo(
    () => ('message' in error ? error.message : error.status_message),
    [error],
  );

  const { resetBoundary } = useErrorBoundary();

  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1 }}
    >
      <Typography variant="h6" align="center">
        Error: {errorMessage}
      </Typography>

      <Button
        variant="outlined"
        color="warning"
        onClick={onButtonClicked || resetBoundary}
      >
        {actionText}
      </Button>
    </Stack>
  );
};

export default ErrorDisplay;

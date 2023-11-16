import { useMemo, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { ErrorResponse } from '../types/tmdb';
import getErrorMessage from '../helpers/getErrorMessage';

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
  const errorMessage = useMemo(() => getErrorMessage(error), [error]);
  const [message, setMessage] = useState(errorMessage);
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

      <Snackbar
        open={!!message}
        autoHideDuration={10000}
        onClose={() => setMessage('')}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>
    </Stack>
  );
};

export default ErrorDisplay;

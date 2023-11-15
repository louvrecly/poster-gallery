import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1 }}
    >
      <Typography variant="h6" align="center">
        Page Not Found.
      </Typography>

      <Button variant="contained" component={Link} to="/">
        Home Page
      </Button>
    </Stack>
  );
};

export default NotFound;

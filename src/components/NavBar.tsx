import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'grey.900' }}>
      <Container maxWidth="lg" sx={{ py: 1 }}>
        <Toolbar disableGutters>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
            flexWrap="wrap"
            spacing={2}
          >
            <Link
              component={RouterLink}
              to="/"
              sx={{ color: 'background.paper', textDecoration: 'none' }}
            >
              <Typography variant="h6">🎬 Poster Gallery</Typography>
            </Link>

            <SearchBar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

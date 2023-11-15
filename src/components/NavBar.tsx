import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import Stack from '@mui/material/Stack';

const NavBar = () => {
  return (
    <AppBar position="sticky">
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Icon fontSize="medium">movie</Icon>
              <Typography variant="h6">Poster Gallery</Typography>
            </Box>

            <SearchBar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

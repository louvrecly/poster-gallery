import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Icon fontSize="medium">movie</Icon>
            <Typography variant="h6">Poster Gallery</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

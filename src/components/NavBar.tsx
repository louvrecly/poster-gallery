import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Icon fontSize="medium">movie</Icon>
          <Typography variant="h6">Poster Gallery</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

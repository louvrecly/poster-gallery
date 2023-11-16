import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import GenresProvider from './components/GenresProvider';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Stack
      flexGrow={1}
      sx={{ backgroundColor: 'grey.900', color: 'background.paper' }}
    >
      <CssBaseline />

      <NavBar />

      <Container
        maxWidth="lg"
        sx={{
          py: 2,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <GenresProvider>
          <Outlet />
        </GenresProvider>
      </Container>
    </Stack>
  );
}

export default App;

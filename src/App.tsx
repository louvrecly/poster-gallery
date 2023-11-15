import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <CssBaseline />

      <NavBar />

      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}

export default App;

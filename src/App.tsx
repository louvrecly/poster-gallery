import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import ErrorDisplay from './components/ErrorDisplay';
import GenresProvider from './components/Providers/GenresProvider';
import KeywordProvider from './components/Providers/KeywordProvider';

function App() {
  return (
    <Stack
      flexGrow={1}
      sx={{ backgroundColor: 'grey.900', color: 'background.paper' }}
    >
      <CssBaseline />

      <KeywordProvider>
        <NavBar />

        <ErrorBoundary FallbackComponent={ErrorDisplay}>
          <GenresProvider>
            <Container
              maxWidth="lg"
              sx={{
                py: 2,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Outlet />
            </Container>
          </GenresProvider>
        </ErrorBoundary>
      </KeywordProvider>
    </Stack>
  );
}

export default App;

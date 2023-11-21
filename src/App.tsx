import { ErrorBoundary } from 'react-error-boundary';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import NavBar from './components/NavBar';
import ErrorDisplay from './components/ErrorDisplay';
import GenresProvider from './components/Providers/GenresProvider';
import PageContent from './components/PageContent';
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
            <PageContent />
          </GenresProvider>
        </ErrorBoundary>
      </KeywordProvider>
    </Stack>
  );
}

export default App;

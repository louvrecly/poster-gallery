import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';

const PageContent = () => {
  return (
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
  );
};

export default PageContent;

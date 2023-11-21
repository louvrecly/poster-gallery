import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';

interface MovieGridContainerProps {
  children: ReactNode;
}

const MovieGridContainer = ({ children }: MovieGridContainerProps) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

export default MovieGridContainer;

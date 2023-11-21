import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';

interface MovieGridItemContainerProps {
  children: ReactNode;
}
const MovieGridItemContainer = ({ children }: MovieGridItemContainerProps) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      {children}
    </Grid>
  );
};

export default MovieGridItemContainer;

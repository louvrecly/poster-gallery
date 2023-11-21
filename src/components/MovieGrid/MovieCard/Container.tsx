import { ReactNode } from 'react';
import Card from '@mui/material/Card';

interface MovieCardContainerProps {
  children: ReactNode;
}

const MovieCardContainer = ({ children }: MovieCardContainerProps) => {
  return (
    <Card
      raised
      sx={{ backgroundColor: 'grey.900', color: 'background.paper' }}
    >
      {children}
    </Card>
  );
};

export default MovieCardContainer;

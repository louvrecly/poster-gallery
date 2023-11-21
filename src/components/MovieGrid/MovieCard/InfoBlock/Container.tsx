import { ReactNode } from 'react';
import Stack from '@mui/material/Stack';

interface InfoBlockContainerProps {
  children: ReactNode;
}

const InfoBlockContainer = ({ children }: InfoBlockContainerProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {children}
    </Stack>
  );
};

export default InfoBlockContainer;

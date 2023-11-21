import { useMemo } from 'react';
import GenreListContainer from './Container';
import Skeleton from '@mui/material/Skeleton';
import getDummyItems from '../../helpers/getDummyItems';

const GenreListLoading = () => {
  const dummyItems = useMemo(() => getDummyItems(3), []);

  return (
    <GenreListContainer>
      {dummyItems.map((idx) => (
        <Skeleton
          key={idx}
          variant="rounded"
          width={72}
          height={24}
          sx={{ borderRadius: 16 }}
        />
      ))}
    </GenreListContainer>
  );
};

export default GenreListLoading;

import { useMemo } from 'react';
import MovieGridContainer from './Container';
import MovieGridItemContainer from './ItemContainer';
import MovieCardLoading from './MovieCard/Loading';
import getDummyItems from '../../helpers/getDummyItems';

const MovieGridLoading = () => {
  const dummyItems = useMemo(() => getDummyItems(8), []);

  return (
    <MovieGridContainer>
      {dummyItems.map((idx) => (
        <MovieGridItemContainer key={idx}>
          <MovieCardLoading />
        </MovieGridItemContainer>
      ))}
    </MovieGridContainer>
  );
};

export default MovieGridLoading;

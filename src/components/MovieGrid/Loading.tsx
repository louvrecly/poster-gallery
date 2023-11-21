import { useMemo } from 'react';
import MovieGridContainer from './Container';
import MovieGridItemContainer from './ItemContainer';
import MovieCardLoading from './MovieCard/Loading';

const MovieGridLoading = () => {
  const dummyItems = useMemo(() => [...Array(8).keys()], []);

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

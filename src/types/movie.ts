export type MovieData = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  original_language: string;
  original_title: string;
  overview: string;
  video: boolean;
  adult: boolean;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
};

const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

type DiscoverResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Record<string, unknown>[];
};

const emptyDiscoverResponse: DiscoverResponse = {
  page: 1,
  total_pages: 1,
  total_results: 0,
  results: [],
};

export async function discoverMovies(
  page: number = 1,
): Promise<DiscoverResponse> {
  try {
    const res = await fetch(
      `${TMDB_API_URL}/3/discover/movie?sort_by=popularity.desc&api_key=${TMDB_API_KEY}&page=${page}`,
    );
    return res.json();
  } catch (err) {
    console.log({ err });
    return emptyDiscoverResponse;
  }
}

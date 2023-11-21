import { GenreMap } from '../types/genre';

function parseGenreIdsParam(
  genreMap: GenreMap,
  genreIdsParam: string,
): number[] {
  const sanitizedParam = genreIdsParam.replace(/\s/g, '');
  const sanitizedIds = (
    sanitizedParam ? sanitizedParam.split(',') : []
  ).flatMap((id) => (parseInt(id) in genreMap ? [parseInt(id)] : []));

  return [...new Set(sanitizedIds)].sort();
}

export default parseGenreIdsParam;

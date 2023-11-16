import { ErrorResponse } from '../types/tmdb';

function getErrorMessage(error: Error | ErrorResponse) {
  return 'message' in error ? error.message : error.status_message;
}

export default getErrorMessage;

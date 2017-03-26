// @flow

import actionNames from '../../constants/action-names';

export const searchShowsError = error => ({
  type: actionNames.SEARCH_SHOWS_ERROR,
  payload: error,
});

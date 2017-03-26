// @flow

import actionNames from '../../constants/action-names';

export const searchShowsSuccess = response => ({
  type: actionNames.SEARCH_SHOWS_SUCCESS,
  payload: response,
});

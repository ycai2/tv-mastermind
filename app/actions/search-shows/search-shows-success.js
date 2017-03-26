// @flow

import actionNames from '../../constants/action-names';

export const searchShowsSuccess = data => ({
  type: actionNames.SEARCH_SHOWS_SUCCESS,
  payload: data,
});

// @flow

import actionNames from '../../constants/action-names';

export const searchShowsRequest = queryParam => ({
  type: actionNames.SEARCH_SHOWS_REQUEST,
  payload: { queryParam },
});

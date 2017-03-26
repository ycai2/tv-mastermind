// @flow

import axios from 'axios';
import { searchShowsRequest } from './search-shows-request';
import { searchShowsSuccess } from './search-shows-success';
import { searchShowsError } from './search-shows-error';

export const searchShows = queryParam => (
  (dispatch, getState) => {
    dispatch(searchShowsRequest(queryParam));
    return axios(`http://api.tvmaze.com/search/shows?q=${queryParam}`)
      .then(({ data }) => dispatch(searchShowsSuccess(data)))
      .catch(error => dispatch(searchShowsError(error)));
  }
);

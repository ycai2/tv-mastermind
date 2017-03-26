// @flow

import axios from 'axios';
import { searchShowsRequest } from './search-shows-request';
import { searchShowsSuccess } from './search-shows-success';
import { searchShowsError } from './search-shows-error';
import config from '../../constants/config';

export const searchShows = queryParam => (
  (dispatch, getState) => {
    dispatch(searchShowsRequest(queryParam));
    return axios(`${config.SEARCH_URL}/shows?q=${queryParam}`)
      .then(({ data }) => dispatch(searchShowsSuccess(data)))
      .catch(error => dispatch(searchShowsError(error)));
  }
);

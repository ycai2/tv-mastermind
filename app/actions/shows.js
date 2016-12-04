import * as types from './types';

export const addShow = () => {
  return {
    type: types.ADD_SHOW,
  }
};

export const searchShows = (text) => {
  return {
    type: types.SEARCH_SHOWS,
    text,
  }
}

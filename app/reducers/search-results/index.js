// @flow
import actionNames from '../../constants/action-names';

const defaultSearchedShows = [];

export const SearchResultsReducer = (state = defaultSearchedShows, action) => {
  switch (action.type) {
    case actionNames.SEARCH_SHOWS_SUCCESS:
      return [
        ...state,
      ];
    case actionNames.SEARCH_SHOWS_ERROR:
      return [
        ...state,
      ];

    default:
      return state;
  }
};

export default { SearchResultsReducer };

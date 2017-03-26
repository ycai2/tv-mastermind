// @flow

import { combineReducers } from 'redux';

import { SearchResultsReducer } from './search-results';

const reducer = combineReducers({
  searchResults: SearchResultsReducer,
});

export default reducer;

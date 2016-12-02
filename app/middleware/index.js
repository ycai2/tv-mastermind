// Export root middleware

import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

export default compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

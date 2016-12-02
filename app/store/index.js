import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import RootReducer from '../reducers';
import RootMiddleware from '../middleware';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const configureStore = (preloadedState = {}) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  return createStore(
    RootReducer,
    preloadedState,
    enhancer
  )
};

export default configureStore;

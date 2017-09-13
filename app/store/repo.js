import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

import reducer from '../reducers/index';

export default createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

import { combineReducers } from 'redux';

import { apodReducer } from './apod';

export default combineReducers({
  apod: apodReducer,
});

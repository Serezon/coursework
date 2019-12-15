import { combineReducers } from 'redux';

import { apodReducer } from './apod';
import { libraryReducer } from './library';

export default combineReducers({
  apod: apodReducer,
  library: libraryReducer,
});

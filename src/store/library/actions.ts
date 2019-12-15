import {createActions} from 'redux-actions';
import {identity} from 'fp-ts/es6/function';

import {libraryTypes} from './types';

export const {
  getLibraryDataRequest,
  getLibraryDataResponse
} = createActions({
  [libraryTypes.GET_LIBRARY_DATA_REQUEST]: identity,
  [libraryTypes.GET_LIBRARY_DATA_RESPONSE]: identity,
});

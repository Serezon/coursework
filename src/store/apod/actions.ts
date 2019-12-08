import {createActions} from 'redux-actions';
import {identity} from 'fp-ts/es6/function';

import {apodTypes} from './types';

export const {
  getApodRequest,
  getApodResponse
} = createActions({
  [apodTypes.GET_APOD_REQUEST]: identity,
  [apodTypes.GET_APOD_RESPONSE]: identity,
});

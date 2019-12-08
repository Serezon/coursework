import {handleActions} from "redux-actions";

import {apodTypes} from './types';

export const apodReducer = handleActions({
  [apodTypes.GET_APOD_REQUEST]: (state) => ({
    ...state,
    loading: true,
  }),
  [apodTypes.GET_APOD_RESPONSE]: (state, { payload }) => {
    return {
      ...state,
      loading: false,
      apodData: payload,
    };
  },
}, {
  loading: false,
});

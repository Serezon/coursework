import {handleActions} from "redux-actions";

import {libraryTypes} from './types';

export const libraryReducer = handleActions({
  [libraryTypes.GET_LIBRARY_DATA_REQUEST]: (state) => ({
    ...state,
    loading: true,
  }),
  [libraryTypes.GET_LIBRARY_DATA_RESPONSE]: (state, { payload }) => {
    return {
      ...state,
      loading: false,
      libraryData: payload,
    };
  },
}, {
  loading: false,
});

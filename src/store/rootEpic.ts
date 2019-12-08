import {combineEpics} from 'redux-observable';

import {apodEpic} from './apod';

export default combineEpics(
  apodEpic
);

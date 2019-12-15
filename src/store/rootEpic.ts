import {combineEpics} from 'redux-observable';

import { apodEpics } from './apod';
import { libraryEpics } from './library';

export default combineEpics(
  ...apodEpics,
  ...libraryEpics,
);

import {createSelector, Selector} from 'reselect';
import {prop, path, identity} from 'ramda';
import * as O from 'fp-ts/es6/Option';
import { Either } from "fp-ts/es6/Either";
import {pipe} from 'fp-ts/es6/pipeable';

const getApod = (state: any) => pipe(
  prop('apod', state),
  O.fromNullable,
);

export const getApodDataSelector: (state: any) => O.Option<Either<String, Object>> = createSelector(
  getApod,
  apodState => pipe(
    apodState,
    O.chain(state => O.fromNullable(prop('apodData', state)))
  ),
);

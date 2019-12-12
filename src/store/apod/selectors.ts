import {createSelector} from 'reselect';
import {prop} from 'ramda';
import * as O from 'fp-ts/es6/Option';
import { Either } from "fp-ts/es6/Either";
import {pipe} from 'fp-ts/es6/pipeable';

import { IApodData } from './interfaces';

const getApod = (state: any) => pipe(
  prop('apod', state),
  O.fromNullable,
);

export const getApodDataSelector: (state: any) => O.Option<Either<string, IApodData>> = createSelector(
  getApod,
  apodState => pipe(
    apodState,
    O.chain(state => O.fromNullable(prop('apodData', state)))
  ),
);

export const getIsLoadingSelector: (state: any) => O.Option<boolean> = createSelector(
  getApod,
  apodState => pipe(
    apodState,
    O.map<any, boolean>(prop('loading'))
  ),
);

import {createSelector} from 'reselect';
import {prop} from 'ramda';
import * as O from 'fp-ts/es6/Option';
import { Either } from "fp-ts/es6/Either";
import {pipe} from 'fp-ts/es6/pipeable';

import { ILibraryData } from './interfaces';

const getLibrary = (state: any) => pipe(
  prop('library', state),
  O.fromNullable,
);

export const getLibraryDataSelector: (state: any) => O.Option<Either<string, any>> = createSelector(
  getLibrary,
  libraryState => pipe(
    libraryState,
    O.chain(state => O.fromNullable(prop('apodData', state)))
  ),
);

export const getIsLoadingSelector: (state: any) => O.Option<boolean> = createSelector(
  getLibrary,
  libraryState => pipe(
    libraryState,
    O.map<any, boolean>(prop('loading'))
  ),
);

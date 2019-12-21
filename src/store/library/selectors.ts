import {createSelector} from 'reselect';
import {prop, path} from 'ramda';
import * as O from 'fp-ts/es6/Option';
import * as E from "fp-ts/es6/Either";
import {pipe} from 'fp-ts/es6/pipeable';

import {ILibraryData} from './interfaces';

const getLibrary = (state: any) => pipe(
  prop('library', state),
  O.fromNullable,
);

export const getLibraryDataSelector: (state: any) => O.Option<E.Either<string, any>> = createSelector(
  getLibrary,
  libraryState => pipe(
    libraryState,
    library => pipe(
      library,
      O.chain<any, E.Either<string, any>>(state => O.fromNullable(
        prop('libraryData', state)
      )),
      O.map(E.map<any, any>(
        (data: any[]) => data.map(item => ({
          data: O.fromNullable(path(['data', 0], item)),
          links: O.fromNullable(path(['links', 0], item)),
        }))
      )),
    )
  ),
);

export const getIsLoadingSelector: (state: any) => O.Option<boolean> = createSelector(
  getLibrary,
  libraryState => pipe(
    libraryState,
    O.map<any, boolean>(prop('loading'))
  ),
);

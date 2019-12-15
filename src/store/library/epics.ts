import {ofType, Epic} from "redux-observable";
import {left, right} from 'fp-ts/es6/Either';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {pathOr} from 'ramda';

import {libraryTypes} from './types';
import {getLibraryDataResponse} from './actions';
import {getUrl, libraryUrl} from '../../utilities';

export const libraryEpics: Epic[] = [
  action$ => action$.pipe(
    ofType(libraryTypes.GET_LIBRARY_DATA_REQUEST),
    mergeMap(({payload}) => ajax.getJSON(getUrl(libraryUrl, ['search'], payload)).pipe(
      map(data => getLibraryDataResponse(right(data))),
      catchError(error => of(getLibraryDataResponse(left(
        pathOr('Unexpected error', ['response', 'error', 'message'], error)
      ))))
    ))
  )
];

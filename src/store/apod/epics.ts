import {ofType, Epic} from "redux-observable";
import {left, right} from 'fp-ts/es6/Either';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {pathOr} from 'ramda';

import {apodTypes} from './types';
import {getApodResponse} from './actions';
import {getUrl, apodUrl} from '../../utilities';

export const apodEpics: Epic[] = [
  action$ => action$.pipe(
    ofType(apodTypes.GET_APOD_REQUEST),
    mergeMap(({payload}) => ajax.getJSON(getUrl(apodUrl, ['planetary', 'apod'], payload)).pipe(
      map(data => getApodResponse(right(data))),
      catchError(error => of(getApodResponse(left(
        pathOr('Unexpected error', ['response', 'error', 'message'], error)
      ))))
    ))),
];

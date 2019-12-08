import {stringify} from 'query-string';
import {join, mergeRight} from 'ramda';
import * as O from 'fp-ts/es6/Option';
import { pipe } from 'fp-ts/es6/pipeable';
import { constant } from 'fp-ts/es6/function';

export const apiUrl: string = 'https://api.nasa.gov';
const api_key: string = '2uUNvaOu2cQf6p3YyIDhYBX8SngmOlrz4qru7vBj';

const combineRoutes: (routes: string[]) => string
  = join('/');

type Param = { [key: string]: any; };

export const getUrl = (routes: string[], params?: Param ): string => {
  const paramString: string = pipe(
    O.fromNullable(params),
    O.alt(constant(O.some({}))),
    O.map(mergeRight({ api_key })),
    O.map(stringify),
    O.getOrElse(constant(''))
  );

  return `${apiUrl}/${combineRoutes(routes)}?${paramString}`;
};

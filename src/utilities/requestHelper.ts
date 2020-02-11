import {stringify} from 'query-string';
import {join} from 'ramda';
import * as O from 'fp-ts/es6/Option';
import { pipe } from 'fp-ts/es6/pipeable';
import { constant } from 'fp-ts/es6/function';

export const apodUrl: string = 'https://api.nasa.gov';
export const libraryUrl: string = 'https://images-api.nasa.gov';
export const api_key: string = '2uUNvaOu2cQf6p3YyIDhYBX8SngmOlrz4qru7vBj';

const combineRoutes: (routes: string[]) => string
  = join('/');

type Param = { [key: string]: any; };

export const getUrl = (url: string, routes: string[], params?: Param ): string => {
  const paramString: string = pipe(
    O.fromNullable(params),
    O.alt(constant(O.some({}))),
    O.map(stringify),
    O.getOrElse(constant(''))
  );

  return `${url}/${combineRoutes(routes)}?${paramString}`;
};

import React from 'react';
import { useSelector } from "react-redux";
import * as O from 'fp-ts/es6/Option';
import * as E from "fp-ts/es6/Either";
import { pipe } from "fp-ts/es6/pipeable";
import {constant} from "fp-ts/es6/function";

import {useFetching} from '../../utilities';
import { getApodRequest, getApodDataSelector } from '../../store/apod';

import './APOD.sass';

export const APOD: React.FC = () => {
  useFetching(getApodRequest, {});
  const maybeApod: O.Option<E.Either<String, Object>> = useSelector(getApodDataSelector);

  const apod = pipe(
    maybeApod,
    // O.alt(E.left),
  );

  return (
    <div>
      <div style={{ color: "red" }}></div>
      <div>url</div>
    </div>
  );
};

import React from 'react';
import {useSelector} from "react-redux";
import * as O from 'fp-ts/es6/Option';
import * as E from "fp-ts/es6/Either";
import {pipe} from "fp-ts/es6/pipeable";
import {constant} from "fp-ts/es6/function";

import {useFetching} from '../../utilities';
import {getApodRequest, getApodDataSelector, IApodData} from '../../store/apod';
import { Error, Preloader } from '../../components';
import { APODDisplay } from './APODDisplay';

import './APOD.sass';

export const APOD: React.FC = () => {
  useFetching(getApodRequest, {});
  const maybeApod: O.Option<E.Either<string, IApodData>> = useSelector(getApodDataSelector);

  return (
    <div className="apod">
      {pipe(
        maybeApod,
        O.map<E.Either<string, IApodData>, any>(E.fold(
          (errorMessage) => (
            <Error message={errorMessage} />
          ),
          (data: IApodData) => (
            <APODDisplay apodData={data} />
          )
        )),
        O.getOrElse(constant(<Preloader />))
      )}
    </div>
  );
};

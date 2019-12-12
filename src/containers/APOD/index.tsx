import React from 'react';
import {useSelector} from "react-redux";
import * as O from 'fp-ts/es6/Option';
import * as E from "fp-ts/es6/Either";
import {pipe} from "fp-ts/es6/pipeable";
import {constant} from "fp-ts/es6/function";

import {getApodDataSelector, getIsLoadingSelector, IApodData} from '../../store/apod';
import {Error, Preloader} from '../../components';
import {APODDisplay} from './APODDisplay';
import {APODDate} from "./APODDate";

import './APOD.sass';

export const APOD: React.FC = () => {
  const maybeApod: O.Option<E.Either<string, IApodData>> = useSelector(getApodDataSelector);
  const maybeLoading: O.Option<boolean> = useSelector(getIsLoadingSelector);

  return (
    <div className="apod">
      <APODDate/>
      {pipe(
        maybeLoading,
        O.map(isLoading => isLoading
          ? <Preloader/>
          : pipe(
            maybeApod,
            O.map<E.Either<string, IApodData>, any>(E.fold(
              (errorMessage) => (
                <Error message={errorMessage}/>
              ),
              (data: IApodData) => (
                <APODDisplay apodData={data}/>
              )
            )),
            O.getOrElse(constant(<Preloader/>))
          )
        ),
        O.getOrElse(constant(<></>))
      )}
    </div>
  );
};

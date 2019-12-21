import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Subject} from "rxjs";
import {debounceTime, skip} from 'rxjs/operators';
import * as O from "fp-ts/es6/Option";
import {pipe} from "fp-ts/es6/pipeable";
import * as E from "fp-ts/es6/Either";
import {constant} from "fp-ts/es6/function";

import {getLibraryDataRequest, getLibraryDataSelector, getIsLoadingSelector} from '../../store/library';
import {Filter} from './Filter';
import { LibraryItem } from './LibraryItem';

import {Preloader} from "../../components/Preloader";
import {Error} from "../../components/Error";

import './Library.sass';

const delayed$ = new Subject();

export const Library: React.FC = () => {
  const dispatch = useDispatch();
  const maybeLibrary = useSelector(getLibraryDataSelector);
  const maybeLoading = useSelector(getIsLoadingSelector);

  const [query, setQuery] = useState('andromeda');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const subscription = delayed$.pipe(
      debounceTime(1000),
    ).subscribe(dispatch);

    return () => subscription.unsubscribe();
  });

  useEffect(() => {
    delayed$.next(
      getLibraryDataRequest({
        q: query,
        title,
        description
      })
    )
  }, [query, title, description]);


  return (
    <div className="library">
      <div className="library__list-wrapper">
          {pipe(
            maybeLoading,
            O.map(isLoading => isLoading
              ? <Preloader/>
              : pipe(
                maybeLibrary,
                O.map<E.Either<string, any>, any>(E.fold(
                  (errorMessage) => (
                    <Error message={errorMessage}/>
                  ),
                  (data: any) => (
                    <ul className="library__list">
                      {data.map((itemData: any) => <LibraryItem data={itemData} />)}
                    </ul>
                  )
                )),
                O.getOrElse(constant(<Preloader/>))
              )
            ),
            O.getOrElse(constant(<></>))
          )}
      </div>
      <div className="library__filters-wrapper">
        <h3 className="library__filters-header">
          Search parameters
        </h3>
        <form className="library__filters">
          <Filter value={query} onChange={e => setQuery(e.target.value)} label="Search query" name="query" />
          <Filter value={title} onChange={e => setTitle(e.target.value)} label="Title" name="title" />
          <Filter value={description} onChange={e => setDescription(e.target.value)} label="Description" name="description" />
        </form>
      </div>
    </div>
  );
};

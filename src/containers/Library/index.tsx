import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { getLibraryDataRequest } from '../../store/library';

import './Library.sass';

export const Library: React.FC = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState('andromeda');

  useEffect(() => {
    dispatch(getLibraryDataRequest({
      q: query,
    }))
  }, [query]);

  return (
    <div className="library">
      <div className="library__list-wrapper">
        <ul className="library__list">

        </ul>
      </div>
      <div className="library__filters-wrapper">
        <h3 className="library__filters-header">
          Search parameters
        </h3>
        <form className="library__filters">
          <input
            type="text"
            placeholder="Search query"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

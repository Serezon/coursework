import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import {Option, some, getOrElse} from 'fp-ts/es6/Option';
import { constant } from 'fp-ts/es6/function';

import createStore from './store/createStore';

const maybeString: Option<string> = some("sdsdsd");

const store: Store = createStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        {getOrElse(constant("None is here"))(maybeString)}
      </div>
    </Provider>
  );
};

export default App;

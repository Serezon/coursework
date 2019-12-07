import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import createStore from './store/createStore';
import { Nav } from './components';

import './global.sass';

const store: Store = createStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Switch>
        <Route>
          Hello, world!
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;

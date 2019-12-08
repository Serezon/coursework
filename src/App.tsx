import React from 'react';
import {Store} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import createStore from './store/createStore';
import {Header} from './components';
import {APOD} from './containers';

import './global.sass';

const store: Store = createStore();

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Header/>
      <Switch>
        <Route path="/apod">
          <APOD/>
        </Route>
        <Redirect to="/apod"/>
      </Switch>
    </Router>
  </Provider>
);

export default App;

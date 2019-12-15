import React from 'react';

import {NavigationItem} from './NavigationItem';
import './Navigation.sass';

interface Route {
  to: string,
  name: string,
}

const routes: Route[] = [
  { to: '/apod', name: 'Astronomic Picture of the Day' },
  { to: '/library', name: 'Image and Video Library' }
];

export const Navigation: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      {routes.map((route, id) => <NavigationItem key={id} {...route} />)}
    </ul>
  </nav>
);

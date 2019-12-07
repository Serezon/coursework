import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.sass';

export const Nav: React.FC = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__item">
        <Link to="/" className="navigation__link">Root</Link>
      </li>
    </ul>
  </nav>
);

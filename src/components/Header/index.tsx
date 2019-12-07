import React from 'react';

import { Navigation } from '../Navigation';
import './Header.sass';
import NasaLogo from '../../assets/images/nasa-logo.svg';

export const Header: React.FC = () => (
  <header className="header">
    <img className="header__logo" src={NasaLogo} alt="NASA logo" />
    <Navigation />
  </header>
);

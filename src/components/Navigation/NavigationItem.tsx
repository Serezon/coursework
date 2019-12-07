import React from 'react';
import {Link} from "react-router-dom";

interface Props {
  to: string,
  name: string
}

export const NavigationItem: React.FC<Props> = ({ to, name } : Props) => (
  <li className="navigation__item">
    <Link to={to} className="navigation__link">{name}</Link>
  </li>
);

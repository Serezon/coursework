import React from 'react';

import './Preloader.sass';

export const Preloader: React.FC = () => (
  <div className="preloader">
    <div className="sk-chase">
      <div className="sk-chase-dot"/>
      <div className="sk-chase-dot"/>
      <div className="sk-chase-dot"/>
      <div className="sk-chase-dot"/>
      <div className="sk-chase-dot"/>
      <div className="sk-chase-dot"/>
    </div>
  </div>
);

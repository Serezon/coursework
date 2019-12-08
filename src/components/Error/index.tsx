import React from 'react';

import './Error.sass';

interface Props {
  message: string;
}

export const Error: React.FC<Props> = ({ message }: Props) => (
  <div className="error">
    <span className="error__text">
      { message }
    </span>
  </div>
);

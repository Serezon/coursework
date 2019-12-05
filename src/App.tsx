import React from 'react';
import {Option, some, getOrElse} from 'fp-ts/es6/Option';

const maybeString: Option<string> = some("sdsdsd");

const App: React.FC = () => {
  return (
    <div>
      {getOrElse(() => "None is here")(maybeString)}
    </div>
  );
};

export default App;

import React from 'react';
import Header from './Header';
import Body from './Body';

// RUN `NPM RUN BUILD` TO PUSH CHANGES TO FIREBASE
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
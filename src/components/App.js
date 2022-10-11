import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Dropdown from './Dropdown';

// RUN `NPM RUN BUILD` TO PUSH CHANGES TO FIREBASE
const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Make so it doesn't go off the screen when on borders
  const changeCoords = (e) => {
    const clickLeft = e.pageX;
    const clickTop = e.pageY;

    setX(clickLeft);
    setY(clickTop);

    console.log(x, y);
  };

  return (
    <div onClick={(e) => changeCoords(e)}>
      <Header />
      <Body />
      <Dropdown newX={x} newY={y} />
    </div>
  );
};

export default App;
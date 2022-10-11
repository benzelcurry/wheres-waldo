import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Waldo from '../images/waldo1.jpg';
import '../stylesheets/Body.css';

const Body = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [drop, setDrop] = useState(false);

  const changeCoords = (e) => {
    let clickLeft;
    let clickTop;

    // Prevents dropdown from going off page
    (e.pageX < 1766) ? (clickLeft = e.pageX) : (clickLeft = e.pageX - 154);
    (e.pageY < 876) ? (clickTop = e.pageY) : (clickTop = e.pageY - 204);

    setX(clickLeft);
    setY(clickTop);

    drop ? setDrop(false) : setDrop(true);

    console.log(e.pageX, e.pageY);
  };

  // ADD CIRCLE SHOWING AREA WHERE USER IS CLICKING ON IN ADDITION TO THE DROPDOWN
  // ADD CUSTOM CURSOR AND MAKE IT A TARGETING CIRCLE?
  return (
    <div className='body-container' onClick={(e) => changeCoords(e)}>
      { drop ? 
        <Dropdown newX={x} newY={y} />
        : null
      }
      <img src={Waldo} alt='Wheres Waldo' className='game' />
    </div>
  );
};

export default Body;
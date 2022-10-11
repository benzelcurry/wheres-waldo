import React, { useState } from 'react';

import Dropdown from './Dropdown';
import Waldo from '../images/waldo1.jpg';
import '../stylesheets/Body.css';

const Body = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [drop, setDrop] = useState(false);

  const changeCoords = (e) => {
    const clickLeft = e.pageX;
    const clickTop = e.pageY;

    setX(clickLeft);
    setY(clickTop);

    drop ? setDrop(false) : setDrop(true);
  };

  // REFINE LOGIC THAT SHOWS WHERE DROPDOWN APPEARS ON SCREEN WHEN CLICKING (IT GETS WEIRD WHEN YOU SCROLL); MAKE APPEAR TO RIGHT OF CURSOR
  // MAKE DROPDOWN HIDDEN BY DEFAULT
  // MAKE DROPDOWN DISAPPEAR WHEN CLICKED OUTSIDE OF
  // ADD CIRCLE SHOWING AREA WHERE USER IS CLICKING ON IN ADDITION TO THE DROPDOWN
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
// Component that contains the game image

import React, { useState } from 'react';

import Modal from './Modal';
import Dropdown from './Dropdown';
import Target from './Target';
import Waldo from '../images/waldo1.jpg';
import '../stylesheets/Body.css';
// COORDINATES:
// Odlaw: X: 207. Y: 468.
// Waldo: X: 1187. Y: 499.
// Wizard: X: 518. Y: 471.
const Body = ({ running, setRunning }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [targX, setTargX] = useState(0);
  const [targY, setTargY] = useState(0);
  const [drop, setDrop] = useState(false);
  const [modal, setModal] = useState(true);

  const changeCoords = (e) => {
    if (!modal) {
      let clickLeft = e.pageX + 25;
      let clickTop = e.pageY + 25;
    
      // Prevents dropdown from going off page; div (image) dimensions are 1920x1080; dropdown dimensions are 154x204;
      // Extra spacing added so dropdown doesn't cover target
      if (e.pageX >= 1736) { clickLeft = e.pageX - 179 };
      if (e.pageY >= 876) { clickTop = e.pageY - 229 };

      setX(clickLeft);
      setY(clickTop);
      setTargX(e.pageX);
      setTargY(e.pageY);

      drop ? setDrop(false) : setDrop(true);

      console.log(`X: ${e.pageX}. Y: ${e.pageY}`);
    }
  };

  return (
    <div className='body-container' onClick={(e) => changeCoords(e)}>
      { modal ?
        <Modal running={running} setRunning={setRunning} modal={modal} setModal={setModal}/>
        : null
      }
      { drop ? 
        <div>
          <Target newX={targX - 28} newY={targY - 25} />
          <Dropdown newX={x} newY={y} />
        </div>
        : null
      }
      { modal ? 
        <img src={Waldo} alt='Wheres Waldo' className='game' 
          style={{ filter: 'blur(3px)' }}
        />
        :
        <img src={Waldo} alt='Wheres Waldo' className='game' />
      }
    </div>
  );
};

export default Body;
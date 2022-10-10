import React from 'react';

import Waldo from '../images/waldo1.jpg';
import '../stylesheets/Body.css';

const Body = () => {
  return (
    <div className='body-container'>
      <img src={Waldo} alt='Wheres Waldo' className='game' />
    </div>
  );
};

export default Body;
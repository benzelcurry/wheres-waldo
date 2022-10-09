import React from 'react';

import Stopwatch from './Stopwatch';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="home-btn">Where's Waldo</div>
      <Stopwatch />
      <div className="remaining">Characters Remaining</div>
    </div>
  );
};

export default Header;
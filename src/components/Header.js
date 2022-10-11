// Header component that displays page title, stopwatch, and characters
// remaining that still need to be found

import React, { useState } from 'react';

import Stopwatch from './Stopwatch';
import '../stylesheets/Header.css';

const Header = () => {
  const [left, setLeft] = useState(3);

  return (
    <div className='header-container'>
      <div className="home-btn">Where's Waldo</div>
      <Stopwatch />
      <div className="remaining">{left}</div>
    </div>
  );
};

export default Header;
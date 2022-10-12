// Header component that displays page title, stopwatch, and characters
// remaining that still need to be found

import React, { useState } from 'react';

import Stopwatch from './Stopwatch';
import WaldoIcon from '../images/waldo-face.png';
import OdlawIcon from '../images/odlaw-face.png';
import WizardIcon from '../images/wizard-face.png';
import '../stylesheets/Header.css';

// FIX WALDO ICON SO SHIRT ISN'T TRANSPARENT
const Header = ({ running, setRunning }) => {
  return (
    <div className='header-container'>
      <div className="home-btn">Where's Waldo</div>
      <Stopwatch running={running} setRunning={setRunning}/>
      <div className="remaining">
        <img src={WaldoIcon} alt='Waldo' className='nav-icon' id='waldo' />
        <img src={OdlawIcon} alt='Odlaw' className='nav-icon' id='odlaw' />
        <img src={WizardIcon} alt='Wizard' className='nav-icon' id='wizard' />
      </div>
    </div>
  );
};

export default Header;
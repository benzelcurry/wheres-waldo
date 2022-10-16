// Header component that displays page title, stopwatch, and characters
// remaining that still need to be found

import React from 'react';

import Stopwatch from './Stopwatch';
import WaldoIcon from '../images/waldo-face.png';
import OdlawIcon from '../images/odlaw-face.png';
import WizardIcon from '../images/wizard-face.png';
import '../stylesheets/Header.css';

// FIX WALDO ICON SO SHIRT ISN'T TRANSPARENT
const Header = ({ running, setRunning, status, time, setTime }) => {

  return (
    <div className='header-container'>
      <div className="home-btn">Where's Waldo</div>
      <Stopwatch running={running} setRunning={setRunning} status={status} time={time} setTime={setTime} />
      <div className="remaining">
        { (status.waldo === 'not-found') ?
          <img src={WaldoIcon} alt='Waldo' className='nav-icon' id='waldo' />
          :
          <img src={WaldoIcon} alt='Waldo' className='nav-icon' id='waldo' style={{ filter: 'brightness(0.3)' }} />
        }
        { (status.odlaw === 'not-found') ? 
          <img src={OdlawIcon} alt='Odlaw' className='nav-icon' id='odlaw' />
          : 
          <img src={OdlawIcon} alt='Odlaw' className='nav-icon' id='odlaw' style={{ filter: 'brightness(0.3)' }} />
        }
        { (status.wizard === 'not-found') ?
          <img src={WizardIcon} alt='Wizard' className='nav-icon' id='wizard' />
          :
          <img src={WizardIcon} alt='Wizard' className='nav-icon' id='wizard' style={{ filter: 'brightness(0.3)' }}/>
        }
      </div>
    </div>
  );
};

export default Header;
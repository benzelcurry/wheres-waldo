// Component for displaying the dropdown menu that allows the user to select
// which character they're clicking on

import React from 'react';

import WaldoIcon from '../images/waldo-face.png';
import OdlawIcon from '../images/odlaw-face.png';
import WizardIcon from '../images/wizard-face.png';
import '../stylesheets/Dropdown.css';

const Dropdown = (props) => {
  return (
    <div className='dropdown' style={{ left: `${props.newX}px`, top: `${props.newY}px` }}>
        <div className='option'><img src={WaldoIcon} alt='Waldo' className='icon' />Waldo</div>
        <div className='option'><img src={OdlawIcon} alt='Odlaw' className='icon' />Odlaw</div>
        <div className='option'><img src={WizardIcon} alt='Wizard' className='icon' />Wizard</div>
    </div>
  );
};

export default Dropdown;
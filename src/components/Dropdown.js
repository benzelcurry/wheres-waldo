// Component for displaying the dropdown menu that allows the user to select
// which character they're clicking on

import React from 'react';

import WaldoIcon from '../images/waldo-face.png';
import OdlawIcon from '../images/odlaw-face.png';
import WizardIcon from '../images/wizard-face.png';
import '../stylesheets/Dropdown.css';

const Dropdown = (props) => {
  const chooseWho = (char) => {
    if (char === 'odlaw') {
      if (props.targX >= (props.odlawX - 25) && props.targX <= (props.odlawX + 25) &&
          props.targY >= (props.odlawY - 25) && props.targY <= (props.odlawY + 25)) {
            alert('You found Odlaw!');
      }
    } else if (char === 'waldo') {
      if (props.targX >= (props.waldoX - 25) && props.targX <= (props.waldoX + 25) &&
          props.targY >= (props.waldoY - 25) && props.targY <= (props.waldoY + 25)) {
        alert('You found Waldo!');
      }
    } else if (char === 'wizard') {
      if (props.targX >= (props.wizardX - 25) && props.targX <= (props.wizardX + 25) &&
          props.targY >= (props.wizardY - 25) && props.targY <= (props.wizardY + 25)) {
        alert('You found Wizard Whitebeard!');
      };
    };
};

  return (
    <div className='dropdown' style={{ left: `${props.newX}px`, top: `${props.newY}px` }}>
        <div className='option' onClick={() => chooseWho('waldo')}><img src={WaldoIcon} alt='Waldo' className='icon' id='waldo-face'/>Waldo</div>
        <div className='option' onClick={() => chooseWho('odlaw')}><img src={OdlawIcon} alt='Odlaw' className='icon' id='odlaw-face'/>Odlaw</div>
        <div className='option' onClick={() => chooseWho('wizard')}><img src={WizardIcon} alt='Wizard' className='icon' id='wizard-face'/>Wizard</div>
    </div>
  );
};

export default Dropdown;
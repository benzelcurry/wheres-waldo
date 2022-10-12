// Modal that appears upon page load/refresh and shows the characters
// that need to be found

import React from 'react';

import WaldoIcon from '../images/waldo-face.png';
import OdlawIcon from '../images/odlaw-face.png';
import WizardIcon from '../images/wizard-face.png';
import '../stylesheets/Modal.css';

const Modal = () => {
  return (
    <div className='modal-container'>
      <div className='prompt'>Characters to find:</div>
      <div className="character">
        <img src={WaldoIcon} alt='Waldo' className='modal-icon' />
        Waldo
      </div>
      <div className="character">
        <img src={OdlawIcon} alt='Odlaw' className='modal-icon' />
        Odlaw
      </div>
      <div className="character">
        <img src={WizardIcon} alt='Wizard' className='modal-icon' />
        Wizard Whitebeard  
      </div>
      <button className='modal-btn'>Start</button>
    </div>
  );
};

export default Modal;
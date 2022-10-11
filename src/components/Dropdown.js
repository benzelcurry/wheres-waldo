// Component for displaying the dropdown menu that allows the user to select
// which character they're clicking on

import React from 'react';

import '../stylesheets/Dropdown.css';

const Dropdown = (props) => {
  return (
    <div className='dropdown' style={{ left: `${props.newX}px`, top: `${props.newY}px` }}>
      <ul>
        <li>Waldo</li>
        <li>Odlaw</li>
        <li>Wizard</li>
      </ul>
    </div>
  );
};

export default Dropdown;
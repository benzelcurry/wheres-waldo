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
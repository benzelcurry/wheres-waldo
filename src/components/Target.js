// Component for displaying a target area when user clicks on the game image

import React from 'react';

import '../stylesheets/Target.css';

const Target = (props) => {
  return (
    <div className='target' style={{ left: `${props.newX}px`, top: `${props.newY}px` }}>
      ✖
    </div>
  );
};

export default Target;
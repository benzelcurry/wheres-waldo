import React from 'react';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="home-btn">Where's Waldo</div>
      <div className="timer">Timer Goes Here</div>
      <div className="remaining">Characters Remaining</div>
    </div>
  );
};

export default Header;
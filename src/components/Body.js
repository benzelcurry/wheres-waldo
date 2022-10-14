// Component that contains the game image

import React, { useState } from 'react';

import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

import Modal from './Modal';
import Dropdown from './Dropdown';
import Target from './Target';
import Waldo from '../images/waldo1.jpg';
import '../stylesheets/Body.css';

// COORDINATES:
// Odlaw: X: 207. Y: 468.
// Waldo: X: 1187. Y: 499.
// Wizard: X: 518. Y: 471.
const Body = ({ running, setRunning }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [targX, setTargX] = useState(0);
  const [targY, setTargY] = useState(0);
  const [drop, setDrop] = useState(false);
  const [modal, setModal] = useState(true);
  const [selection, setSelection] = useState('none');
  const [status, setStatus] = useState({
    odlaw: 'not-found',
    waldo: 'not-found',
    wizard: 'not-found'
  });
  let odlawX, odlawY, waldoX, waldoY, wizardX, wizardY;
  const [locations, setLocations] = useState([]);

  // Firebase stuff
  const firebaseConfig = {
    apiKey: "AIzaSyCaQpnXFVozA-hP8SHsFXBH_CA0E0BEFW0",
    authDomain: "wheres-waldo-at.firebaseapp.com",
    projectId: "wheres-waldo-at",
    storageBucket: "wheres-waldo-at.appspot.com",
    messagingSenderId: "998831103944",
    appId: "1:998831103944:web:77b57f1271541ba8052afd"
  };
  
  // Initialize Firebase app
  initializeApp(firebaseConfig);
  
  // Initialize services
  const db = getFirestore();
  
  // Collection reference
  const colRef = collection(db, 'character-coords')
  
  // Gets coordinates and ID's from Firestore Database
  // SET COORDS TO A VARIABLE USING STATE TO BE CHECKED AGAINST
  // WHEN USER CLICKS SOMEWHERE AND SELECTS A CHARACTER
  
  getDocs(colRef)
    .then((snapshot) => {
      let coords = [];
      snapshot.docs.forEach((doc) => {
        coords.push({ ...doc.data(), id: doc.id })
      });
      // console.log(coords);
      // console.log(coords[0].x)
      odlawX = coords[0].x
      odlawY = coords[0].y
      waldoX = coords[1].x
      waldoY = coords[1].y
      wizardX = coords[2].x
      wizardY = coords[2].y
    })
    .catch(err => {
      console.log(err.message);
    });

  // FUNCTION FOR VERIFYING WITH BACK END IF USER CLICKED IN RIGHT SPOT
  // NEEDS WORK LINKING WITH CHARACTERS REMAINING AND OTHER ASPECTS OF PROGRAM
  const chooseWho = (char) => {
    if (char === 'odlaw') {
      if (targX >= (odlawX - 25) && targX <= (odlawX + 25) &&
          targY >= (odlawY - 25) && targY <= (odlawY + 25)) {
            alert('You found Odlaw!');
      };
    } else if (char === 'waldo') {
      if (targX >= (waldoX - 25) && targX <= (waldoX + 25) &&
          waldoY >= (odlawY - 25) && targY <= (waldoY + 25)) {
            alert('You found Waldo!');
      };
    } else if (char === 'wizard') {
      if (targX >= (wizardX - 25) && targX <= (wizardX + 25) &&
          targY >= (wizardY - 25) && targY <= (wizardY + 25)) {
            alert('You found Wizard!');
      };
    };
  };
  // END FUNCTION

  const changeCoords = (e) => {
    if (!modal) {
      let clickLeft = e.pageX + 25;
      let clickTop = e.pageY + 25;
    
      // Prevents dropdown from going off page; div (image) dimensions are 1920x1080; dropdown dimensions are 154x204;
      // Extra spacing added so dropdown doesn't cover target
      if (e.pageX >= 1736) { clickLeft = e.pageX - 179 };
      if (e.pageY >= 876) { clickTop = e.pageY - 229 };

      setX(clickLeft);
      setY(clickTop);
      setTargX(e.pageX);
      setTargY(e.pageY);

      drop ? setDrop(false) : setDrop(true);

      console.log(odlawX, odlawY, waldoX, waldoY, wizardX, wizardY);

      chooseWho('wizard');
    }
  };

  return (
    <div className='body-container' onClick={(e) => changeCoords(e)}>
      { modal ?
        <Modal running={running} setRunning={setRunning} modal={modal} setModal={setModal}/>
        : null
      }
      { drop ? 
        <div>
          <Target newX={targX - 28} newY={targY - 25} />
          <Dropdown newX={x} newY={y} setSelection={setSelection}/>
        </div>
        : null
      }
      { modal ? 
        <img src={Waldo} alt='Wheres Waldo' className='game' 
          style={{ filter: 'blur(3px)' }}
        />
        :
        <img src={Waldo} alt='Wheres Waldo' className='game' />
      }
    </div>
  );
};

export default Body;
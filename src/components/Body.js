// Component that contains the game image

import React, { useState } from 'react';

import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs,
} from 'firebase/firestore'

import Modal from './Modal';
import Dropdown from './Dropdown';
import Target from './Target';
import Leaderboard from './Leaderboard';
import Waldo from '../images/waldo1.jpg';
import '../stylesheets/Body.css';

const Body = ({ running, setRunning, status, setStatus }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [targX, setTargX] = useState(0);
  const [targY, setTargY] = useState(0);
  const [drop, setDrop] = useState(false);
  const [modal, setModal] = useState(true);
  const [odlawX, setOdlawX] = useState(null);
  const [odlawY, setOdlawY] = useState(null);
  const [waldoX, setWaldoX] = useState(null);
  const [waldoY, setWaldoY] = useState(null);
  const [wizardX, setWizardX] = useState(null);
  const [wizardY, setWizardY] = useState(null);

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
  
  // Gets coordinates and ID's from Firestore Database then assigns to state variables
  getDocs(colRef)
    .then((snapshot) => {
      let coords = [];
      snapshot.docs.forEach((doc) => {
        coords.push({ ...doc.data(), id: doc.id })
      });
      setOdlawX(coords[0].x);
      setOdlawY(coords[0].y);
      setWaldoX(coords[1].x);
      setWaldoY(coords[1].y);
      setWizardX(coords[2].x);
      setWizardY(coords[2].y);
    })
    .catch(err => {
      console.log(err.message);
    });

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
          <Dropdown newX={x} newY={y} targX={targX} targY={targY} odlawX={odlawX} odlawY={odlawY}
                    waldoX={waldoX} waldoY={waldoY} wizardX={wizardX} wizardY={wizardY} status={status}
                    setStatus={setStatus}/>
        </div>
        : null
      }
      <Leaderboard db={db} collection={collection} getDocs={getDocs}/>
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
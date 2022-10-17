// Component for adding your name to the leaderboard

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import '../stylesheets/AddName.css';

// IF USER SCORE IS > ANY OF TOP 10 OF HISCORE STATE VARIABLE,
// PROMPT USER TO ADD NAME TO LEADERBOARD
const AddName = ({ db, time }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`

    if (name === '') {
      console.log(score);
      return;
    }

    const scoresColRef = collection(db, 'leaderboard');
    // TIME WILL BE ADDED THROUGH THE ADDDOC LINE AS WELL
    // CHECK SCORE AGAINST TOP TEN SCORES BEFORE PROMPTING USER
    // TO ENTER THEIR NAME
    addDoc(scoresColRef, { name, score })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.message)
      });

    alert(name);
  }

  return (
    <div className='name-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>User Name</label>
        <input type='text' value={name}
         onChange={ (e) => setName(e.target.value) } />
        <button type='submit'>Enter Name</button>
      </form>
      <div className='time-container'>Your time was: &nbsp;{
        <div>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
      }
      </div>
    </div>
  );
};

export default AddName;
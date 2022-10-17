// Component for adding your name to the leaderboard

import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import '../stylesheets/AddName.css';

// IF USER SCORE IS > ANY OF TOP 10 OF HISCORE STATE VARIABLE,
// PROMPT USER TO ADD NAME TO LEADERBOARD
const AddName = ({ db, time, setPromptName }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = `${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}`

    if (name === '') {
      alert('Please enter a name');
      return;
    }

    const scoresColRef = collection(db, 'leaderboard');
    addDoc(scoresColRef, { name, score })
      .then(response => {
        setPromptName(true);
      })
      .catch(err => {
        console.log(err.message)
      });
  }

  return (
    <div className='name-container'>
      <div className='time-container'>Your time was: &nbsp;{
        <div>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
      }
      </div>
      <form onSubmit={handleSubmit} className='name-input'>
        <input type='text' value={name} placeholder='Username'
         onChange={ (e) => setName(e.target.value) } className='name-field'
          maxLength={'10'}
         />
        <button type='submit' className='submit-btn'>Submit</button>
      </form>
    </div>
  );
};

export default AddName;
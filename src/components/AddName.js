import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import '../stylesheets/AddName.css';

const AddName = ({ db }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      return;
    }

    const scoresColRef = collection(db, 'leaderboard');
    // TIME WILL BE ADDED THROUGH THE ADDDOC LINE AS WELL
    // CHECK SCORE AGAINST TOP TEN SCORES BEFORE PROMPTING USER
    // TO ENTER THEIR NAME
    addDoc(scoresColRef, {name})
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
    </div>
  );
};

export default AddName;
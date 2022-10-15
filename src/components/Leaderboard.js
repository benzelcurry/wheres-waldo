import React, { useState, useEffect } from 'react';

import '../stylesheets/Leaderboard.css';

const Leaderboard = ({ db, collection, getDocs }) => {
  const [hiscores, setHiscores] = useState([]);

  // Include ', []' after trailing '}'?
  useEffect(() => {
    getScores()
  });

  // COME BACK AND FINISH THIS; HOPEFULLY FIXES INFINITE LOOPING
  const getScores = () => {
    const scoresColRef = collection(db, 'leaderboard');

    getDocs(scoresColRef)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err.message));
  }

  return (
    <div className='leaderboard-container'>
    </div>
  )
};

export default Leaderboard;
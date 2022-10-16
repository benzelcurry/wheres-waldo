import React, { useState, useEffect } from 'react';

import '../stylesheets/Leaderboard.css';

const Leaderboard = ({ db, collection, getDocs }) => {
  const [hiscores, setHiscores] = useState([]);

  // Include ', []' after trailing '}'?
  useEffect(() => {
    getScores()
  }, []);

  useEffect(() => {
    console.log(hiscores);
  }, [hiscores]);

  // COME BACK AND FINISH THIS; HOPEFULLY FIXES INFINITE LOOPING
  const getScores = () => {
    const scoresColRef = collection(db, 'leaderboard');

    getDocs(scoresColRef)
      .then(response => {
        const scores = response.docs.map(doc => ({ 
          data: doc.data(), id: 
          doc.id 
        }))
        setHiscores(scores);
      })
      .catch(err => console.log(err.message));
  }

  return (
    <div className='leaderboard-container'>
      <div className='leaderboard-title'>Leaderboard</div>
      <ol className='score-container'>
        { hiscores.map(score => 
          <li key={score.id} className='score'>
            <div>{ score.data.name }</div>
            <div>{ score.data.score }</div>
          </li>) }
      </ol>
    </div>
  )
};

export default Leaderboard;
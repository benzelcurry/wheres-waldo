// Component that displays the leaderboard

import React, { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';

import AddName from './AddName';
import '../stylesheets/Leaderboard.css';

// IMPLEMENT A PLAY AGAIN BUTTON
// STYLE THIS COMPONENT MORE
const Leaderboard = ({ db, collection, getDocs, time }) => {
  const [hiscores, setHiscores] = useState([]);

  useEffect(() => {
    getScores()
  }, []);

  useEffect(() => {
    console.log(hiscores);
  }, [hiscores]);

  const getScores = () => {
    const scoresColRef = collection(db, 'leaderboard');

    getDocs(scoresColRef)
      .then(response => {
        const scores = response.docs.map(doc => ({ 
          data: doc.data(), 
          id: doc.id 
        }))

        scores.sort((a, b) => (
          a.data.score < b.data.score
        ) ? -1 : 1);

        const topTen = scores.slice(0, 10);

        setHiscores(topTen);
      })
      .catch(err => console.log(err.message));
  }

  return (
    <div className='leaderboard-container'>
      <div className='leaderboard-title'>Leaderboard</div>
      <ol className='score-container'>
        { hiscores.map(score => 
          <li key={score.id}>
            <div className="score">
              <div>{ score.data.name }</div>
              <div>{ score.data.score }</div>
            </div>
          </li>) }
      </ol>
    </div>
  )
};

export default Leaderboard;
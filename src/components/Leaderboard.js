// Component that displays the leaderboard

import React, { useState, useEffect } from 'react';

import '../stylesheets/Leaderboard.css';

const Leaderboard = ({ db, collection, getDocs, setTime, setStatus, setPromptName }) => {
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

  const playAgain = () => {
    setStatus({
      odlaw: 'not-found',
      waldo: 'not-found',
      wizard: 'not-found'
    });

    setPromptName(false);
    setTime(0);
  };

  return (
    <div className='leaderboard-container'>
      <div className='leaderboard-title'>Leaderboard</div>
      <ol className='score-container'>
        { hiscores.map(score => 
          <li key={score.id}>
            <div className="score">
              <div>{ score.data.name }</div>
              {/* <div>{ score.data.score }</div> */}
              <div>{("0" + Math.floor((score.data.score / 60000) % 60)).slice(-2)}:{("0" + Math.floor((score.data.score / 1000) % 60)).slice(-2)}</div>
            </div>
          </li>) }
      </ol>
      <button className='play-again' onClick={() => playAgain()}>Play Again</button>
    </div>
  )
};

export default Leaderboard;
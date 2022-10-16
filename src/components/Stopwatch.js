// Stopwatch component for measuring time taken to finish the game

import React, { useEffect } from 'react';

const Stopwatch = ({ running, status, time, setTime }) => {
  useEffect(() => {
    let interval;

    if (Object.values(status).indexOf('not-found') > -1 && running === true) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [status, running]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  )
};

export default Stopwatch;
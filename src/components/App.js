import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState({
    odlaw: 'not-found',
    waldo: 'not-found',
    wizard: 'not-found'
  });

  return (
    <div >
      <Header running={running} setRunning={setRunning} status={status} setStatus={setStatus} time={time} setTime={setTime} />
      <Body running={running} setRunning={setRunning} status={status} setStatus={setStatus} time={time} setTime={setTime} />
    </div>
  );
};

export default App;
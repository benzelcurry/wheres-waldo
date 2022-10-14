import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

// RUN `NPM RUN BUILD` TO PUSH CHANGES TO FIREBASE
// To-do list for completing project:
// 1. Finish front-end design + user interaction
// 1.1. Fix Waldo's transparent shirt
// 1.2. Replace characters-remaining counter in header with icons of the characters that get
//      greyed out when they've been found 
// 2. Figure out how to store character coordinates on Firestore Database !// CHECK
// 3. Figure out how to send user click coordinates to check with database
//    user has clicked the correct space; remove character from remaining
//    chars if so.
// 4. Record time when user has finished
// 5. Let user set their name and then post their name + score to a leaderboard
// 6. (OPTIONAL) Implement more maps to choose from

const App = () => {
  const [running, setRunning] = useState(false);

  return (
    <div >
      <Header running={running} setRunning={setRunning} />
      <Body running={running} setRunning={setRunning}/>
    </div>
  );
};

export default App;
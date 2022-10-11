import React from 'react';
import Header from './Header';
import Body from './Body';

// RUN `NPM RUN BUILD` TO PUSH CHANGES TO FIREBASE
// To-do list for completing project:
// 1. Finish front-end design + user interaction
// 1.1. Make dropdown show charactern faces
// 1.2. Create modal that covers screen and shows characters user needs to find on page refresh 
// 2. Figure out how to store character coordinates on Firestore Database
// 3. Figure out how to send user click coordinates to check with database
//    user has clicked the correct space; remove character from remaining
//    chars if so.
// 4. Record time when user has finished
// 5. Let user set their name and then post their name + score to a leaderboard
// 6. (OPTIONAL) Implement more maps to choose from

const App = () => {
  return (
    <div >
      <Header />
      <Body />
    </div>
  );
};

export default App;
import React from 'react'
import Player from './components/player';
import Song from './components/song';

function App() {
  return (
    <div className="App">
      <h1>Skihist</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;

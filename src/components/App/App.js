import React from 'react';
import './App.css';

import SearchResults from  '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar/>
    <div className="App-playlist">
      <SearchResults/>
      <Playlist/>
     </div>
  </div>
</div>
  );
}

export default App;

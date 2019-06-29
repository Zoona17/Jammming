import React from 'react';
import Tracklist from './Tracklist/Tracklist';
class Playlist extends React.Component{
    render(){
        return (<div className="Playlist">
        <input value="New Playlist"/>
        <Tracklist />
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
      </div>)
    }
}
export default Playlist;
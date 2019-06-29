import React from 'react';
import Tracklist from '../TrackList/TrackList';
import './Playlist.css';
class Playlist extends React.Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
}


handleNameChange(event){
  this.props.onNameChange(event.target.value);
}

    render(){
        return (
        <div className="Playlist">
        <input value={this.props.title} onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
        <Tracklist tracks={this.props.playlistTracks}
         isRemoval={true} 
         onRemove={this.props.onRemove} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>)
    }
}

export default Playlist;
import React, { Component } from 'react';

export default class PlayListItem extends Component {

  render() {
    const { song } = this.props
    return(
        <ul className='playListItem'>
          <li>User: {song.userName}</li>
          <li>Artist/Band: {song.songArtist}</li>
          <li>Title: {song.songTitle}</li>
          <li>Notes: {song.songNotes}</li>
        </ul>
    )
  }
}

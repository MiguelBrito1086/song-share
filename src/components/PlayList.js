import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

class PlayList extends Component {
  constructor(props){
    super(props)
    this.state = {
    songs: []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({songs: data});
    })
  }

  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({songs: data});
      })
  }
  render() {
    let songs = this.state.songs.map(song => {
      return <PlayListItem song={ song } key={song._id} />
    })
    return (
      <div>
        <div className='updateButton'>
          <button type='submit' onClick={this.fetchData}>
            Update List
          </button>
        </div>
        <div className='bubble'>
          { songs }
        </div>
      </div>
    )
  }
}

export default PlayList

// The state for your PlayList should just have one key value pair, songs, in order to properly function with the fetch function from the tinylasagna.js file that you will copy into the PlayListComponent (follow the directions in that file).

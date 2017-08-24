import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: "",
    }
  }

  _submit = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addToList = (e) => {
      e.preventDefault();
      let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
      console.log(response, "yay");
      })
      .catch(err => {
      console.log(err, "boo!");
      });

      this.setState({
        userName: '',
        songNotes: '',
        songArtist: '',
        songTitle: ''
      });
  }

  render(){
    return(
      <div className="container">
        <div >
          <form onSubmit={this.addToList} className="form">
            <p>User Name:</p>
            <input
              onChange={this._submit}
              type="text"
              name="userName"
              value={this.state.userName}
              placeholder='Name or User Name'
            />
            <p>Artist/Band:</p>
            <input
              onChange={this._submit}
              type="text"
              name="songArtist"
              value={this.state.songArtist}
              placeholder='Artist or Band Name'
            />
            <p>Song Title:</p>
            <input
              onChange={this._submit}
              type="text"
              name="songTitle"
              value={this.state.songTitle}
              placeholder='Song Title'
            />
            <p>Notes about Song:</p>
            <textarea
              onChange={this._submit}
              type="text"
              name="songNotes"
              value={this.state.songNotes}
              placeholder=''
              rows='5'
              cols='30'
            />
            <br />
            <button type='submit'>Add</button>
          </form>
        </div>
        <div>

        </div>
      </div>
    )
  }
}

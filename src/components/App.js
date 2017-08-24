import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='title'>
          <NavBar />
        </div>
        <div className='content'>
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;

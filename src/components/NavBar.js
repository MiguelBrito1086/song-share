import React, { Component } from "react";
import cloud from './cloud.png';

class NavBar extends Component {

  render() {
    return (
    <div className='title'>
      <img src={cloud} alt='cloud' className='cloud'/>
      <h1>PlayList Cloud!</h1>
    </div>
  )}
}
export default NavBar

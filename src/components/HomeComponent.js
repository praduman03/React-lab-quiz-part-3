import './home.css';
import { Link } from 'react-router-dom';

import React, { Component } from 'react'


export default class HomeComponent extends Component {
  render() {
    return (
      <div className='ac'>
        <h1>Quiz App</h1>
         <Link to="/quiz">
        <button id='play'>PLay</button>
        </Link>
      </div>
    )
  }
}

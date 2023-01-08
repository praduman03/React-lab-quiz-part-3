import './result.css';
import React, { Component } from 'react'
import  customData from "./questions.json";
import { Link } from 'react-router-dom';

export default class Resultcomponent extends Component {


  render() {
    const score = localStorage.getItem("score")
    const attempted = localStorage.getItem("attempted")
    return (
      <div className='_container'>
        <h2 id='result'>Result</h2>
        <div id='result-container'>
            <h3 id='head'>You need more practice!</h3>
            <h2 id='score-per'>Your Score is {(score/customData.length *100).toFixed(2)}%</h2>
            <div id='result-component'>
                <div className='info'><h4>Total number of questions</h4> <h4>{customData.length}</h4></div>
                <div className='info'><h4>Number of attempted questions</h4> <h4>{attempted}</h4></div>
                
                <div className='info'><h4>Number of correct questions</h4> <h4>{score}</h4></div>
                <div className='info'><h4>Number of wrong questions</h4> <h4>{attempted-score}</h4></div>
            </div>
        </div>
        <div id='result-button-div'>
          <Link to="/quiz">
            <button className='result-button' id='result-button-1'>Play Again</button>
            </Link>
            <Link to="/">
            <button className='result-button' id='result-button-2'>Back To Home</button>
            </Link>
        </div>

      </div>
    )
  }
}

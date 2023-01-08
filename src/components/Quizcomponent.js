import './quiz.css';
import React, { Component } from 'react'
import  customData from "./questions.json";
import { Link } from 'react-router-dom';

export default class Quizcomponent extends Component {
  constructor(){
    super();
    this.state={
        currentQuestion:0,
        score:0,
        attempted:0
    }
}

evaluate = (e) => {
  this.changeQuestion(true);
  this.setState({ attempted: this.state.attempted + 1 });
  if (customData[this.state.currentQuestion].answer === e.target.innerText) {
    this.setState({ score: this.state.score + 1 });
    alert("Correct Answer");
  } else {
    alert("Wrong Answer");
  }
  
};

changeQuestion(isForward){
    this.setState((prevState)=>{
        let comingQuestion=prevState.currentQuestion;
        comingQuestion=isForward?comingQuestion+1:comingQuestion-1;
        if(comingQuestion<0){
            comingQuestion=0;
        }
        else if(comingQuestion>14){
            comingQuestion=14;
        }
        return {
            currentQuestion: comingQuestion,
        };
    })
}
jumpToResult=()=>{
  localStorage.setItem("score", this.state.score);
   localStorage.setItem("attempted", this.state.attempted);
}

quit(){
  alert("Are you sure you want to quit?")
  window.location.reload();
}
  render() {
    let data = customData[this.state.currentQuestion];
    return (
      <div className='container'>
        <h3>{this.state.attempted}</h3>
        <div id='quistion-container'>
            <h2 id='ques-head'>Question</h2>
            <p id='question-number'>{this.state.currentQuestion+1} of {customData.length}</p>
            <p id='question'>{data.question}</p>
            <div className='option-div'>
                <div className='options' onClick={(e)=>this.evaluate(e)}>{data.optionA}</div>
                <div className='options' onClick={(e)=>this.evaluate(e)}>{data.optionB}</div>
                <div className='options' onClick={(e)=>this.evaluate(e)}>{data.optionC}</div>
                <div className='options' onClick={(e)=>this.evaluate(e)}>{data.optionD}</div>
            </div>
            <div className='button-div'>
                {/* <button className='butt' id='button1' onClick={()=>this.changeQuestion(false)}>Previous</button> */}
                <button className='butt' id='button2' onClick={()=>this.changeQuestion(true)}>Next</button>
                <button className='butt' id='button3' onClick={()=>this.quit()}>Quit</button>
                <Link to="/result">
                <button className='butt' id='button4' onClick={()=>this.jumpToResult()}>Finish</button>
                </Link>
                
            </div>
        </div>

      </div>
    )
  }
}


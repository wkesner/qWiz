import React from 'react';
import render from 'react-dom';

import { store } from './reducer';
import { boundIncrementProgress } from './ActionCreator';

const finishMaker = () => {
  boundIncrementProgress();
}

const questionObject = {
  question: ' ',
  responseA: ' ',
  responseB: ' ',
  responseC: ' ',
  responseD: ' ',
  correct: ' ',
  resource: ' ',
}

const localQuizArray = [];

const logQuestion = id => {
  switch(id) {
    case "Question":
      if (document.getElementById("Question").value != null) {
        const value = document.getElementById("Question").value;
        questionObject.question = value;
        console.log(questionObject.question);
      }
      break;
  }
}

export class Quizmaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionValue: ' ',
      aValue: ' ',
      bValue: ' ',
      cValue: ' ',
      dValue: ' ',
      correctValue: ' ',
      resourceValue: ' ',
    };
  }

  handleQuestionChange = event => {
    this.setState({ questionValue: event.target.value}); //assigning value from dom
    questionObject.question = this.state.questionValue;
    console.log("A question was logged: " + questionObject.question);
  }

  handleAChange = event => {
    this.setState({ aValue: event.target.value});
    questionObject.aValue = this.state.aValue;
    console.log("AValue was logged: " + questionObject.aValue);
  }

  handleBChange = event => {
    this.setState({ bValue: event.target.value});
    questionObject.bValue = this.state.bValue;
    console.log("BValue was logged: " + questionObject.bValue);
  }

  handleCChange = event => {
    this.setState({ cValue: event.target.value});
    questionObject.cValue = this.state.cValue;
    console.log("cValue was logged: " + questionObject.cValue);
  }


  render() {

    return(
      <div className='Quizmaker'>
        <h1> MAKE YOUR QUIZ </h1>
          <form>
            <label>Question:
              <input
              type="text"
              id="Question"
              placeholder="Enter your question here."
              value={this.state.questionValue}
              onChange={this.handleQuestionChange} />
            </label>
              <br></br>
            <label>Response A:
              <input
              type="text"
              id="Response A"
              placeholder="Enter your first response here."
              value={this.state.aValue}
              onChange={this.handleAChange} />
            </label>
              <br></br>
            <label>Response B:
              <input
              type="text"
              id="Response B"
              placeholder= "Enter your second response here."
              value={this.state.bValue}
              onChange={this.handleBChange} />
            </label>
              <br></br>
            <label>Response C:
              <input
              type="text"
              id="Response C"
              placeholder="Enter your third response here."
              value={this.state.cValue}
              onChange={this.handleCChange} />
            </label>
              <br></br>
            <label>Response D:
              <input type="text" ui="Response D"/>
            </label>
              <br></br>
            <label>Answer:
              <input type="text" id="Answer"/>
            </label>
              <br></br>
            <label>Link to learn more:
              <input type="text" id="Resource"/>
            </label>
              <br></br>
            <button>Add Question</button>
            <button>Finish Quiz</button>
          </form>
      </div>

    )
  }
}

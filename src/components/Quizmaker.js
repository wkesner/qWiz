import React from 'react';
import render from 'react-dom';

import { store } from './reducer';
import { quizArray } from './database';
import { boundIncrementProgress, boundMakerProgress } from './ActionCreator';

/*const finishMaker = () => {
  boundIncrementProgress();
}*/

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

  handleDChange = event => {
    this.setState({ dValue: event.target.value});
    questionObject.dValue = this.state.dValue;
    console.log("dValue was logged: " + questionObject.dValue);
  }

  handleAnswerChange = event => {
    this.setState({ correctValue: event.target.value});
    questionObject.correctValue = this.state.correctValue;
    console.log("correctValue was logged: " + questionObject.correctValue);
  }

  handleResourceChange = event => {
    this.setState({ resourceValue: event.target.value});
    questionObject.resourceValue = this.state.resourceValue;
    console.log("resourceValue was logged: " + questionObject.resourceValue);
  }

  logQuestionToQuiz = () => {
    if (localQuizArray[localQuizArray.length - 1] != questionObject
      && questionObject != null) {
          localQuizArray.push(questionObject);
    }
    console.log(localQuizArray);
    this.setState({
      questionValue: ' ',
      aValue: ' ',
      bValue: ' ',
      cValue: ' ',
      dValue: ' ',
      correctValue: ' ',
      resourceValue: ' ',
    });
  }

  finishQuiz = () => {
    this.logQuestionToQuiz();
    if(localQuizArray != null) {
      quizArray.push(localQuizArray);
    }
    console.log(quizArray);
    boundIncrementProgress();
  }


  render() {

    return(
      <div className='Quizmaker'>
        <h1> MAKE YOUR QUIZ </h1>

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
              <input
              type="text"
              ui="Response D"
              placeholder="Enter your third response here."
              value={this.state.dValue}
              onChange={this.handleDChange} />
            </label>
              <br></br>
            <label>Answer:
              <input
              type="text"
              id="Answer"
              placeholder="Copy & paste correct response here."
              value={this.state.correctValue}
              onChange={this.handleAnswerChange} />
            </label>
              <br></br>
            <label>Link to learn more:
              <input
              type="text"
              id="Resource"
              placeholder="Link to learn more."
              value={this.state.resourceValue}
              onChange={this.handleResourceChange} />
            </label>
              <br></br>
            <button onClick={() => this.logQuestionToQuiz()}>Add Question</button>
            <button onClick={() => this.finishQuiz()}>Finish Quiz</button>

      </div>

    )
  }
}

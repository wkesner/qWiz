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
      question: ' ',
      responseA: ' ',
      responseB: ' ',
      responseC: ' ',
      responseD: ' ',
      correct: ' ',
      resource: ' ',
    };
  }


  handleQuestionChange = event => {
    this.setState({ question: event.target.value
    }, () => { //assigning value from dom
      questionObject.question = this.state.question;
      console.log("A question was logged: " + questionObject.question);
    });
  }

  handleAChange = event => {
    this.setState({ responseA: event.target.value
    }, () => {
      questionObject.responseA = this.state.responseA;
      console.log("AValue was logged: " + questionObject.responseA);
    });
  }

  handleBChange = event => {
    this.setState({ responseB: event.target.value
    }, () => {
      questionObject.responseB = this.state.responseB;
      console.log("BValue was logged: " + questionObject.responseB);
    });
  }

  handleCChange = event => {
    this.setState({ responseC: event.target.value
    }, () => {
      questionObject.responseC = this.state.responseC;
      console.log("cValue was logged: " + questionObject.responseC);
    });
  }

  handleDChange = event => {
    this.setState({ responseD: event.target.value
    }, () => {
      questionObject.responseD = this.state.responseD;
      console.log("dValue was logged: " + questionObject.responseD);
    });
  }

  handleAnswerChange = event => {
    this.setState({ correct: event.target.value
    }, () => {
      questionObject.correct = this.state.correct;
      console.log("correctValue was logged: " + questionObject.correct);
    });
  }

  handleResourceChange = event => {
    this.setState({ resource: event.target.value
    }, () => {
      questionObject.resource = this.state.resource;
      console.log("resourceValue was logged: " + questionObject.resource);
    });
  }


  addQuestion = () => {
    //this.fixReactInput();
    if (localQuizArray[localQuizArray.length - 1] != questionObject
      && questionObject.question != ' '
      && questionObject.responseA!= ' '
      && questionObject.responseB != ' '
      && questionObject.responseC != ' '
      && questionObject.responseD != ' '
      && questionObject.correct != ' '
      && questionObject.resource != ' ') {
          localQuizArray.push(questionObject);
          alert("Succesfully submitted your question.");
          console.log(localQuizArray);
          this.setState({
            question: ' ',
            responseA: ' ',
            responseB: ' ',
            responseC: ' ',
            responseD: ' ',
            correct: ' ',
            resource: ' ',
          });
    } else {
      alert("Question not submitted. Please fill in all sections.");
    }
  }

  finishQuiz = () => {
    this.addQuestion();
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
            <br></br>
              <input
              id="Question"
              placeholder="Enter your question here."
              value={this.state.question}
              onChange={this.handleQuestionChange} />
            </label>
              <br></br>
            <label>Response A:
              <input
              type="text"
              id="Response A"
              placeholder="Enter your first response here."
              value={this.state.responseA}
              onChange={this.handleAChange} />
            </label>
              <br></br>
            <label>Response B:
              <input
              type="text"
              id="Response B"
              placeholder= "Enter your second response here."
              value={this.state.responseB}
              onChange={this.handleBChange} />
            </label>
              <br></br>
            <label>Response C:
              <input
              type="text"
              id="Response C"
              placeholder="Enter your third response here."
              value={this.state.responseC}
              onChange={this.handleCChange} />
            </label>
              <br></br>
            <label>Response D:
              <input
              type="text"
              ui="Response D"
              placeholder="Enter your third response here."
              value={this.state.responseD}
              onChange={this.handleDChange} />
            </label>
              <br></br>
            <label>Answer:
              <input
              type="text"
              id="Answer"
              placeholder="Copy & paste correct response here."
              value={this.state.correct}
              onChange={this.handleAnswerChange} />
            </label>
              <br></br>
            <label>Link to learn more:
              <input
              type="text"
              id="Resource"
              placeholder="Link to learn more."
              value={this.state.resource}
              onChange={this.handleResourceChange} />
            </label>
              <br></br>
            <button onClick={() => this.addQuestion()}>Add Question</button>
            <button onClick={() => this.finishQuiz()}>Finish Quiz</button>

      </div>

    )
  }
}

import React from 'react';

import { quizArray } from './database';
import { boundIncrementProgress } from './ActionCreator';

import _ from 'lodash';
//import lodash.clonedeep from 'lodash'; = require('lodash.clone');
//const clonedeep = require('lodash.clonedeep');

const questionObject = {
  question: '',
  responseA: '',
  responseB: '',
  responseC: '',
  responseD: '',
  correct: '',
  resource: '',
  quizName: '',
}

let localQuizArray = [];

export class Quizmaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      responseA: '',
      responseB: '',
      responseC: '',
      responseD: '',
      correct: '',
      resource: '',
      quizName: '',
    };
  }

  handleNameChange = event => {
    this.setState({ quizName: event.target.value
    }, () => {
      questionObject.quizName = this.state.quizName;
      console.log("QuizName was logged: " + questionObject.quizName);
    });
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
    if(this.state.question === '' ||
       this.state.responseA === '' ||
       this.state.responseB === '' ||
       this.state.responseC === '' ||
       this.state.responseD === '' ||
       this.state.correct === '' ||
       this.state.resource === '') {
         return alert("Question not submitted. Please fill in all sections")
       } else if (this.state.quizname === '' && localQuizArray === []) {
         return alert("Please name your quiz.");
       } else {

        localQuizArray.push(_.cloneDeep(questionObject));

         this.setState({
           question: '',
           responseA: '',
           responseB: '',
           responseC: '',
           responseD: '',
           correct: '',
           resource: '',
           quizName: '',
         });

         console.log(localQuizArray);
         alert("Successfully submitted your question.");
       }
  }
  //finishing the quiz without filling in everything currently creates a fatal error
  finishQuiz = () => {
    if (this.state.question === '' ||
     this.state.responseA === '' ||
     this.state.responseB === '' ||
     this.state.responseC === '' ||
     this.state.responseD === '' ||
     this.state.correct === '' ||
     this.state.resource === '' ||
     localQuizArray === [])
    {
      return alert("Question not submitted. Please fill in all sections");
    } else {
        this.addQuestion();
        quizArray.push(localQuizArray);
        console.log(quizArray);
        localQuizArray = [];
        boundIncrementProgress();
        alert("Successfully submitted your quiz.");
    }
  }

  isQuizNameInput = () => {
    if (localQuizArray[0].quizName != null) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const showNameinput = localQuizArray.length === 0;
    return(
      <div className='Quizmaker'>
        <h1> MAKE YOUR QUIZ </h1>
        {showNameinput ? <label>Quiz Name:
          <br></br>
            <input
              id="Quiz Name"
              placeholder="Enter your quiz's name."
              value={this.state.quizName}
              onChange={this.handleNameChange} />
            </label>
            : <h2>{localQuizArray[0].quizName}</h2>}

            <br></br>
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

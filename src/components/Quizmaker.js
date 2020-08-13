import React from 'react';

import { quizArray } from './database';
//import { listDatabases, client } from './Connection';
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

  finishQuiz = () => {
    //listDatabases(client);
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
        <div className="row justify-content-center">
          <div className="col-sm-8 col-xl-5 text-center mx-4">
            <h1 className="jumbotron display-5 bg-warning text-dark text-center font-italic mt-4">
            MAKE A QUIZ!</h1>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-light text-dark px-4 py-4">
              {showNameinput ? <label>
                <h3 className="card-title">Quiz Name
                </h3>
                <div className="card-body text-center">
                  <input
                    className="form-control"
                    id="Quiz Name"
                    placeholder="enter your quiz's name"
                    value={this.state.quizName}
                    onChange={this.handleNameChange}
                  />
                </div>
              </label>
              : <h3 className="card-title"> {localQuizArray[0].quizName}</h3>}
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
              <label>
                <h3 className="card-title">
                  Question
                </h3>
                <div className="card-body text-center">
                  <input
                    className="form-control"
                    id="Question"
                    placeholder="enter your question"
                    value={this.state.question}
                    onChange={this.handleQuestionChange}
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
                <label>
                  <h3 className="card-title">
                    Response A
                  </h3>
                  <div className="card-body text-center">
                    <input
                    className="form-control"
                    type="text"
                    id="Response A"
                    placeholder="enter your first response"
                    value={this.state.responseA}
                    onChange={this.handleAChange} />
                  </div>
                </label>
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
              <label>
                <h3 className="card-title">
                Response B
                </h3>
                <div className="card-body text-center">
                  <input
                    className="form-control"
                    type="text"
                    id="Response B"
                    placeholder= "enter your second response"
                    value={this.state.responseB}
                    onChange={this.handleBChange}
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
                <label>
                  <h3 className="card-title">
                  Response C
                  </h3>
                  <div className="card-body text-center">
                    <input
                      className="form-control"
                      type="text"
                      id="Response C"
                      placeholder="enter your third response"
                      value={this.state.responseC}
                      onChange={this.handleCChange}
                    />
                  </div>
                </label>
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
                <label>
                  <h3 className="card-title">
                    Response D
                  </h3>
                  <div className="card-body text-center">
                    <input
                    className="form-control"
                    type="text"
                    ui="Response D"
                    placeholder="enter your third response"
                    value={this.state.responseD}
                    onChange={this.handleDChange}
                    />
                  </div>
                </label>
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
                <label>
                <h3 className="card-title">
                  Answer
                </h3>
                <div className="card-body text-center">
                  <input
                  className="form-control"
                    type="text"
                    id="Answer"
                    placeholder="copy & paste correct response"
                    value={this.state.correct}
                    onChange={this.handleAnswerChange}
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 col-xl-3 mx-3 mx-md-1 my-3 mb-3">
            <div className="card bg-dark text-white px-4 py-4">
                <label>
                <h3 className="card-title">
                  Link
                </h3>
                  <div className="card-body">
                    <input
                      className="form-control"
                      type="text"
                      id="Resource"
                      placeholder="add a link for user reference"
                      value={this.state.resource}
                      onChange={this.handleResourceChange}
                    />
                  </div>
                </label>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="row">
              <div className="col">
                <div className="btn-group-lg justify content center m-2">
                  <button
                    type="button"
                    className="btn btn-warning px-5 py-2 m-2"
                    onClick={() => this.addQuestion()}>add question
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning px-5 py-2 m-2"
                    onClick={() => this.finishQuiz()}>finish quiz
                  </button>
                </div>
              </div>
            </div>

        </div>
      </div>

    )
  }
}

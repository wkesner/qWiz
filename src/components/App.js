import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

//will need a logo
//import logo from './logo.svg';
import './App.css';
//import { Route, IndexRoute} from 'react-router';

import { Questionnaire } from './Questionnaire';
import { Report } from './Report';
import { Quizpicker } from './Quizpicker';
import { Quizmaker } from './Quizmaker';

import { store } from './reducer';
import { addScore, resetScore, addProgress, goodFeedback, badFeedback } from './Actions';
import { boundResetScore, boundResetProgress } from './ActionCreator';



//bringing quiz data in from database
export const database = require('./database');
export let questionBank = database.quizArray[0];
export const getQuestionBank = (database, quizId) => {
  return database.quizArray[store.getState().quizId.quizId]
}

export function getStore() {
  return store;
}

export function resetGame() {
  boundResetScore();
  boundResetProgress();
}

//find the current question
export function currentQuestion() {
  const localBank = getQuestionBank(database, store.getState().quizId.quizId);

  if(store.getState().progress.progress >= localBank.length &&
store.getState().progress.progress >= 0) {
    //quiz stops once we run out of questions
    return localBank[localBank.length - 1];
    } else {
      return localBank[store.getState().progress.progress];
    }
}

//main app
class App extends React.Component {
//do I need a piece of state data to track the virtual page I want to put the in?
//Having trouble thinking of how to route user to QuizPicker without creating a collision
// with the initialState found in the store.
  constructor(props) {
    super(props)
    //const store = props.store

    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  render() {
    //swaps between quiz picker, main quiz and report card
    //if progress is -1, user is sent to quizPicker
    if (store.getState().progress.progress === -1) {
      return(
        <div>
          <Quizpicker />
        </div>
      )
    //report card
    }
    //if progress is -2, user is sent to Quizmaker
    else if (store.getState().progress.progress === -2) {
      return(
        <div>
          <Quizmaker />
        </div>
      )
    }



     else if (store.getState().progress.progress >= questionBank.length) {
      return(
          <div>
            <Report />
          </div>
      );
    } else {
      //Main Quiz
      return (
        <div>
          <Questionnaire />
        </div>
      );
    }
  }
}
export default App;

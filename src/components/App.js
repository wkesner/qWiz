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
import { Quizpicker, questionId } from './Quizpicker';

import { store } from './reducer';
import { addScore, resetScore, addProgress, goodFeedback, badFeedback } from './Actions';
import { boundResetScore, boundResetProgress } from './ActionCreator';



//bringing quiz data in from database
export const database = require('./database');
export let questionBank = database.quizArray[questionId];


export function getStore() {
  return store;
}

export function resetGame() {
  boundResetScore();
  boundResetProgress();
}

//find the current question
export function currentQuestion() {

  if(store.getState().progress.progress >= questionBank.length) {
    //quiz stops once we run out of questions
    return questionBank[questionBank.length - 1];
    } else {
      return questionBank[store.getState().progress.progress];
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

    //swaps between main quiz and report card
    //report card
    if (store.getState().progress.progress >= questionBank.length) {
      return(
          <div>
            <Report />
          </div>
      );

    } else {
      //Main Quiz
      return (
        <div>
          <Quizpicker />
          <Questionnaire />
        </div>
      );
    }
  }
}
export default App;

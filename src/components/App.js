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
import { store } from './reducer';
import { addScore, resetScore, addProgress, goodFeedback, badFeedback } from './Actions';

import { boundIncrementScore, boundResetScore } from './ActionCreator';

//import { selectScore, selectProgress } from './selectors';

//bringing quiz data in from database
export const database = require('./database');
export const questionBank = database.quizArray[0];


export function getStore() {
  return store;
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
function App () {

    //report card
    if (getStore().getState().progress >= questionBank.length) {
      return(
          <div>
            <h1>Score: { store.getState().score.score }</h1>
              <li>{ questionBank[0].question }</li>
                <p>{ store.getState().correctionArray.correctionArray[0] }
                </p>
                <p> Learn more at { questionBank[0].resource }
                </p>

              <li>{ questionBank[1].question }</li>
                <p>{ store.getState().correctionArray.correctionArray[1]  }
                </p>
                <p> Learn more at: { questionBank[1].resource }
                </p>
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

export default App;

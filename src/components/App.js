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
import { addScore, addProgress, goodFeedback, badFeedback } from './Actions';

import { boundIncrementScore } from './ActionCreator';

//import { selectScore, selectProgress } from './selectors';

//bringing quiz data in from database
export const database = require('./database');
export const questionBank = database.quizArray[0];


export function getStore() {
  return store;
}

//find the current question
export function currentQuestion() {

  if(getStore().getState().progress >= questionBank.length) {
    //quiz stops once we run out of questions
    return questionBank[questionBank.length - 1];
    } else {
      return questionBank[getStore().getState().progress];
    }
}


//main app
function App () {

console.log(getStore().getState().progress.score);
  //setting up our states
  let [score, setScore] = useState(0);
  let [feedbackText, setFeedbackText] = useState('');
  let [progress, setProgress] = useState(0);
  let [response, setResponse] = useState(0);

  //an array filled with the result of a users submissions
  let [correctionArray, setCorrectionArray] = useState([]);


    //evaluates and records which responses are correct, then iterates progress by 1
    /*const evaluate = () => {
      const currentArray = Object.values(currentQuestion());

      //correct answer
      if (progress < questionBank.length &&
        currentArray[response] === currentArray[5]) {

          setCorrectionArray(correctionArray.concat('Correct!'));
          //setFeedbackText(feedbackText = 'Great Job!');
          store.dispatch(goodFeedback());
          boundIncrementScore();


      //incorrect answer
      } else if (progress < questionBank.length) {

        setCorrectionArray(correctionArray.concat(`Incorrect, the correct answer is:
          ${currentQuestion().correct}`));
        store.dispatch(badFeedback());
          //setFeedbackText(feedbackText = 'Better Luck Next Time!')
      }
      store.dispatch(addProgress());

      setProgress(progress + store.getState().progressCount.progress);

    }*/

    //report card
    if (getStore().getState().progress >= questionBank.length) {
      return(
          <div>
            <h1>Score: { score }</h1>
              <li>{ questionBank[0].question }</li>
                <p>{ correctionArray[0] }
                </p>
                <p> Learn more at { questionBank[0].resource }
                </p>

              <li>{ questionBank[1].question }</li>
                <p>{ correctionArray[1] }
                </p>
                <p> Learn more at: { questionBank[1].resource }
                </p>
          </div>
      );

    } else {
      //Main Quiz
      return (
        <div>
          //<Questionnaire />
        </div>
      );
    }

}


export default App;

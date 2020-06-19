import React from 'react';
import render from 'react-dom';
import { Provider, connect } from 'react-redux';

import { getStore, questionBank } from './App';
import {
  boundSubmitA,
  boundSubmitB,
  boundSubmitC,
  boundSubmitD
} from './ActionCreator';
import { rootReducer, store } from './reducer';

import { selectCurrentQuestion } from './selectors';

import { evaluate } from './evaluate';

// functions that track which button is pressed until it can be recorded in evaluate
//very redundant, I would like to bring these down to one component if possible
const submitA = () => {
  boundSubmitA();
  evaluate();
  //setScore(score + store.getState().scoreCount.score); //must use local state to update
}

const submitB = () => {
  boundSubmitB();
  evaluate();
  //setScore(score + store.getState().scoreCount.score);
}

export const submitC = () => {
  boundSubmitC();
  evaluate();
  //setScore(score + store.getState().scoreCount.score);
}
export const submitD = () => {
  boundSubmitD();
  evaluate();
//  setScore(score + store.getState().scoreCount.score);
}

export class Questionnaire extends React.Component {
  render() {
    return(
    <div className="Questionnaire">
          <header className="Questionnaire-Header">
            <h1>{ selectCurrentQuestion().question }</h1>
            <h2>Score: { store.getState().score.score } </h2>
              <p>{ store.getState().feedbackText.feedbackText }</p>
                <button id="responseA" onClick={() => submitA()}>
                { selectCurrentQuestion().responseA } </button>
                <button id="responseB" onClick={() => submitB()}>
                { selectCurrentQuestion().responseB }</button>
                <button id="responseC" onClick={() => submitC()}>
                { selectCurrentQuestion().responseC }</button>
                <button id="responseD" onClick={() => submitD()}>
                { selectCurrentQuestion().responseD }</button>
        </header>
    </div>)
  }
}

const select = appState => ({
  score: appState.score,
  progress: appState.progress,
  feedbackText: appState.feedbackText,
  response: appState.response,
  correctionArray: appState.correctionArray,
});

export default connect(select)(Questionnaire);

//find the current question and present the relevent information
/*function currentQuestion() {
  if(getStore().getState().progress >= questionBank.length) {
    //quiz stops once we run out of questions
    return questionBank[questionBank.length - 1];
    } else {
      return questionBank[getStore().getState().progress];
    }
}*/

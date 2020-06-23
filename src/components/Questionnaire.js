import React, { Component } from 'react';
import render from 'react-dom';
import { Provider, connect } from 'react-redux';

import { getStore, questionBank } from './App';
import {
  doIncrementScore,
  doResetScore,
  doIncrementProgress,
  doResetProgress,
  boundSubmitA,
  boundSubmitB,
  boundSubmitC,
  boundSubmitD
} from './ActionCreator';
import { rootReducer, store, initialState } from './reducer';

import { selectCurrentQuestion } from './selectors';

import { evaluate } from './evaluate';


// functions that track which button is pressed until it can be recorded in evaluate
//very redundant, I would like to bring these down to one component if possible
const submitA = () => {
  boundSubmitA();
  evaluate();
}

const submitB = () => {
  boundSubmitB();
  evaluate();
}

export const submitC = () => {
  boundSubmitC();
  evaluate();

}
export const submitD = () => {
  boundSubmitD();
  evaluate();
}

/*const select = appState => ({
    score: appState.score,
    progress: appState.progress,
    feedbackText: appState.feedbackText,
    response: appState.response,
    correctionArray: appState.correctionArray,
});*/


export class Questionnaire extends React.Component {
  constructor(props) {
    super(props)
    //const store = props.store

    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return(
      <div className="Questionnaire">
          <header className="Questionnaire-Header">
            <h1>{ selectCurrentQuestion().question }</h1>
            <h2 id="score"> Score: { store.getState().score.score }  </h2>
              <p> { console.log('propScore: ' + this.props.score) } </p>
              <p>{ this.props.feedbackText }</p>
                <button id="responseA" onClick={() => submitA()}>
                { selectCurrentQuestion().responseA } </button>
                <button id="responseB" onClick={() => submitB()}>
                { selectCurrentQuestion().responseB }</button>
                <button id="responseC" onClick={() => submitC()}>
                { selectCurrentQuestion().responseC }</button>
                <button id="responseD" onClick={() => submitD()}>
                { selectCurrentQuestion().responseD }</button>
        </header>
      </div>
      )
    }
}

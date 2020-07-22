import React from 'react';

import {
  boundSubmitA,
  boundSubmitB,
  boundSubmitC,
  boundSubmitD
} from './ActionCreator';
import { store } from './reducer';
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
              <p>{ store.getState().feedbackText.feedbacktext }</p>
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

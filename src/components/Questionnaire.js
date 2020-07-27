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
  
//feedback is not currently being rendered anyway, removing this code from the block for now
//<p>{ store.getState().feedbackText.feedbacktext }</p>
  render() {
    return(
      <div className="Questionnaire">
        <div className="row justify-content-center">
          <div className="col-8 col-md-6">
            <h1 className="jumbotron display-5 bg-dark text-white mt-5">
            { selectCurrentQuestion().question }
            </h1>
          </div>

            <h2 className="jumbotron display-5 mt-5" id="score">
              Score: { store.getState().score.score }
            </h2>

        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-10 mt-2">
            <div className="btn-group-lg">
              <button
              type="btn" className="btn btn-outline-primary btn-block text-lowercase"
              id="responseA" onClick={() => submitA()}>
              { selectCurrentQuestion().responseA } </button>
              <button
              type="btn" className="btn btn-outline-primary btn-block text-lowercase"
              id="responseB" onClick={() => submitB()}>
              { selectCurrentQuestion().responseB }</button>
              <button
              type="btn" className="btn btn-outline-primary btn-block text-lowercase"
              id="responseC" onClick={() => submitC()}>
              { selectCurrentQuestion().responseC }</button>
              <button
              type="btn" className="btn btn-outline-primary btn-block text-lowercase"
              id="responseD" onClick={() => submitD()}>
              { selectCurrentQuestion().responseD }</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

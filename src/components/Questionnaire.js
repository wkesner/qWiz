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
        <div className="row justify-content-center mx-3">
          <div className="col-sm-8 col-lg-6">
            <h1 className="jumbotron display-5 bg-dark text-white mt-4 ">
            { selectCurrentQuestion().question }
            </h1>
          </div>
          <div className="col-sm-4 col-xl-2">
            <h2 className="jumbotron display-5 mt-xs-1 mt-sm-4"
            id="score">
              Score: { store.getState().score.score }
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-8 col-sm-6 col-md-5 mx-5">
            <div className="btn-group-lg ">
              <button
              type="button" className="btn btn-outline-primary btn-block text-lowercase py-1"
              id="responseA" onClick={() => submitA()}>
              { selectCurrentQuestion().responseA } </button>
              <button
              type="button" className="btn btn-outline-primary btn-block text-lowercase py-1"
              id="responseB" onClick={() => submitB()}>
              { selectCurrentQuestion().responseB }</button>
              <button
              type="button" className="btn btn-outline-primary btn-block text-lowercase py-1"
              id="responseC" onClick={() => submitC()}>
              { selectCurrentQuestion().responseC }</button>
              <button
              type="button" className="btn btn-outline-primary btn-block text-lowercase py-1"
              id="responseD" onClick={() => submitD()}>
              { selectCurrentQuestion().responseD }</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
}

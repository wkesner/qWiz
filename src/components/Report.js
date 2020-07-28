import React from 'react';

import { store } from './reducer';
import { resetGame } from './App';
import { selectCurrentQuestion, selectQuestionBank } from './selectors';
import { quizArray } from './database';


export class Report extends React.Component {
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
        <div>
          <div className="row justify-content-center">
            <div className="col-xs-8 col-lg-4 col-xl-3 text-center">
              <h1 className="jumbotron display-4 mx-4 mt-4">
              Score: { store.getState().score.score }/
              {quizArray[store.getState().quizId.quizId].length}</h1>
            </div>
            <div className="col-sm-8 col-xl-7 mx-3 py-0 px-xl-0 mt-lg-4">

                {quizArray[store.getState().quizId.quizId].map((question, i) =>
                  <div className="jumbotron display-5 bg-dark text-white">
                    <h2>{ selectQuestionBank()[i].question }</h2>
                      <p>{ store.getState().correctionArray.correctionArray[i] }</p>
                      <p>Learn more at { selectQuestionBank()[i].resource}</p>
                  </div>
                  )
                }

            </div>
          </div>
            <div className="row justify-content-center">
              <div className="col-xs-8 col-sm-6 col-md-5 col-lg-4 mx-5">
                <button
                type="button" className="btn btn-outline-primary btn-block text-lowercase py-1"
                id="reportContinue" onClick={() => resetGame()}>
                  Play again?
                </button>
              </div>
            </div>
        </div>
    );
  }
}

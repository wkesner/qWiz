import React from 'react';

import { store } from './reducer';
import { resetGame } from './App';
import { selectCurrentQuestion, selectQuestionBank } from './selectors';
import { quizArray } from './database';

const quizId = store.getState().quizId.quizId;
//const localBank = database.quizArray[quizId];


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
          <h1>Score: { store.getState().score.score } / {quizArray[quizId].length}</h1>
            <ul>
              {quizArray[store.getState().quizId.quizId].map((question, i) =>
                <div>
                  <h2>{ selectQuestionBank()[i].question }</h2>
                    <p>{ store.getState().correctionArray.correctionArray[i] }</p>
                    <p>Learn more at { selectCurrentQuestion().resource}</p>
                </div>
                )
              }
            </ul>
            <button id="reportContinue" onClick={() => resetGame()}>
              Play again?
            </ button>
        </div>
    );
  }
}

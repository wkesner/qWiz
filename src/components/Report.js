import React, { Component } from 'react';

import { store } from './reducer';
import { questionBank, resetGame } from './App';
import { selectCurrentQuestion, selectQuestionBank } from './selectors';

const database = require('./database');
const quizId = store.getState().quizId.quizId;
const localBank = database.quizArray[quizId];


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
          <h1>Score: { store.getState().score.score }</h1>
            <ul>
              
            </ul>

            <li>{ selectQuestionBank()[0].question }</li>
              <p>{ store.getState().correctionArray.correctionArray[0] }
              </p>
              <p> Learn more at { selectCurrentQuestion().resource }
              </p>

            <li>{ selectQuestionBank()[1].question }</li>
              <p>{ store.getState().correctionArray.correctionArray[1]  }
              </p>
              <p> Learn more at: { selectCurrentQuestion().resource }
              </p>
            <button id="reportContinue" onClick={() => resetGame()}>
              Play again?
            </ button>
        </div>
    );
  }
}

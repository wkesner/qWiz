import React, { Component } from 'react';

import { store } from './reducer';
import { questionBank, resetGame } from './App';


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
            <button id="reportContinue" onClick={() => resetGame()}>
              Play again?
            </ button>
        </div>
    );
  }
}

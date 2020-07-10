import React, { Component } from 'react';

import { store } from './reducer';
import { quizArray } from './database';
import { database, getQuestionBank } from './App';
import { boundIncrementProgress, boundDecrementProgress,
  boundIncrementId, boundResetId, boundPopId, boundEarthId } from './ActionCreator';
import { selectCurrentQuestion } from './selectors'

//Increment QuizId as many times as the position of the button on quizArray
const mapQuizToButtons = buttonPosition => {
  for (let i = 0; i <= buttonPosition - 1; i++) {
    boundIncrementId();
  }
  return chooseQuiz();
}

const chooseQuiz = () => {
    getQuestionBank(database, store.getState().quizId.quizId);
    boundIncrementProgress();
}

const choosePop = () => {
  boundPopId();
  getQuestionBank(database, store.getState().quizId.quizId);
  boundIncrementProgress();
}

const chooseEarth = () => {
  boundEarthId();
  getQuestionBank(database, store.getState().quizId.quizId);
  boundIncrementProgress();
}

const chooseMake = () => {
  boundDecrementProgress();
  console.log('Progress: ' + store.getState().progress.progress);
}
// creates buttons for every quiz in the quizArray
const quizButtons = () => {
  for(let i = 0; i <= quizArray.length - 1; i++) {
    /*return (
      <li
        className="list-button"
        onClick={() => chooseQuestion(quizArray[i])}>
        button {i}
      </li>
    )*/
  }
}

export class Quizpicker extends React.Component {
  constructor(props) {
    super(props)
    //const store = props.store

    this.state = store.getState()

    store.subscribe(() => {
      this.setState(store.getState())
    });
  }


  render() {
    return (
      <div>
          <h1>PICK YOUR QUIZ OR MAKE YOUR OWN!</h1>
          <ul>
            {quizArray.map((quiz, i) =>

                <button
                  className="list-button"
                  key={i}
                  onClick={() => mapQuizToButtons(i)}
                  >
                  {quiz[0].quizName}
                </button>)
            }
            <button onClick={() => chooseMake()}> Make your own! </button>
          </ul>
      </div>
    )
  }
}

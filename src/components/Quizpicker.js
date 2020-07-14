import React from 'react';

import { store } from './reducer';
import { quizArray } from './database';
import { database, getQuestionBank } from './App';
import { boundIncrementProgress, boundDecrementProgress,
  boundIncrementId } from './ActionCreator';

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

const chooseMake = () => {
  boundDecrementProgress();
  console.log('Progress: ' + store.getState().progress.progress);
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
                  {quiz[quiz.length-1].quizName}
                </button>)
            }
            <button onClick={() => chooseMake()}> Make your own! </button>
          </ul>
      </div>
    )
  }
}

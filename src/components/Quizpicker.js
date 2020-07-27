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
      <div className="Quizpicker">
        <div className="row justify-content-center">
          <div className="col-7 text-center">
            <div className="jumbotron bg-dark text-white mt-5">
              <h1 className="display-5 font-italic">
              PICK A QUIZ OR MAKE YOUR OWN!</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-4 col-xl-7">
                <div className="btn-group-lg">
                  <ul>
                    {quizArray.map((quiz, i) =>

                        <button
                          type="button"
                          className="btn btn-outline-primary btn-block text-lowercase"
                          key={i}
                          onClick={() => mapQuizToButtons(i)}
                          >
                          {quiz[quiz.length-1].quizName}
                        </button>)
                    }
                    <button
                    type="button"
                    className="btn btn-warning btn-block text-lowercase"
                    onClick={() => chooseMake()
                    }> Make your own </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';

import { store } from './reducer';
import { quizArray } from './database';
import { database, getQuestionBank } from './App';
import { boundIncrementProgress, boundDecrementProgress,
  boundIncrementId, boundResetId, boundPopId, boundEarthId } from './ActionCreator';

//using pure function selectors in Questionnaire, so I need to modify questionBank
// unsure how to do this exactly as current question is called constantly throughout the App

/*const makeButtonArray = () => {
  for (i = 0; i <= quizArray.length - 1; i++) {
    <ul>
      <button>button {i}</button>
    <ul>
  }
}*/

let buttonArray = [];

//const chooseQuestion = quizPosition => {
  //not messing with redux state, pure functions won't allow for inhereted positions
  //getQuestionBank(database, store.getState().quizPosition)
  //boundIncrementProgress();
//}

const mapButtons = () => {
  for (let i = 0; i <= quizArray.length - 1; i++) {

    //will need to bind the increment id upon clicking on the button
    //need to track which button user is clicking on and then increment the correct nunmber of times
    while (i <= quizArray.length - 1) {
      boundIncrementId();
    }
    buttonArray.push(
      <li
        className="list-button"
        onClick={() => chooseQuiz(quizArray[i])}>
        button {i}
      </li>
    )
  }
  return(buttonArray);
}

const chooseQuiz = quizPosition => {
    getQuestionBank(database, store.getState().quizPosition);
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

//spaghetti that don't work well
/*<div>
  <ul>
    {buttonArray}
  </ul>
  {buttonArray.map(quiz => (
    <ul>
      <button onClick={() =>
        //chooseQuestion()
      }> {quizArray.question} </button>
    </ul>
  ))}
</div>*/

  render() {
    return (
      <div>
          <h1>PICK YOUR QUIZ OR MAKE YOUR OWN!</h1>

          <button onClick={() => choosePop()}> Pop Hits </button>
          <button onClick={() => chooseEarth()}> Earth Science </button>
          <button onClick={() => chooseMake()}> Make your own! </button>
      </div>
    )
  }
}

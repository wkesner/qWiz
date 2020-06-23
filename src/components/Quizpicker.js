import React, { Component } from 'react';

import { store } from './reducer';

import { database, questionBank } from './App';

export let questionId = 0;
//using pure function selectors in Questionnaire, so I need to modify questionBank
// unsure how to do this exactly as current question is called constantly throughout the App

const choosePop = () => {
  return questionId = 0;
}

const chooseEarth = () => {
  return questionId = 1;
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
          <h1>PICK YOUR QUIZ</h1>
          <button onClick={() => choosePop()}> Pop Hits </button>
          <button onClick={() => chooseEarth()}> Earth Science </button>
      </div>
    )
  }
}

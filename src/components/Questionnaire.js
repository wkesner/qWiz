import React from 'react';
import render from 'react-dom';
import { Provider, connect } from 'react-redux';

import { getStore, questionBank, currentQuestion } from './App';
import {
  boundSubmitA,
  boundSubmitB,
  boundSubmitC,
  boundSubmitD
} from './ActionCreator';

import { selectProgress, selectScore } from './selectors';

import { evaluate } from './evaluate';

// functions that track which button is pressed until it can be recorded in evaluate
//very redundant, I would like to bring these down to one component if possible
const submitA = () => {
  boundSubmitA();
  evaluate();
  //setScore(score + store.getState().scoreCount.score); //must use local state to update
}

const submitB = () => {
  boundSubmitB();
  evaluate();
  //setScore(score + store.getState().scoreCount.score);
}

export const submitC = () => {
  boundSubmitC();
  evaluate();
  //setScore(score + store.getState().scoreCount.score);
}
export const submitD = () => {
  boundSubmitD();
  evaluate();
//  setScore(score + store.getState().scoreCount.score);
}


//find the current question and present the relevent information
/*function currentQuestion() {
  if(getStore().getState().progress >= questionBank.length) {
    //quiz stops once we run out of questions
    return questionBank[questionBank.length - 1];
    } else {
      return questionBank[getStore().getState().progress];
    }
}*/

export const Questionnaire = ({ score, progress }) => {
 return null;
}

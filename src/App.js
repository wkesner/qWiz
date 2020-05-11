import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { useEffect } from 'react';
//will need a logo
import logo from './logo.svg';
import './App.css';
import { Route, IndexRoute} from 'react-router';

const questionBank = [
  {question: 'Do girls just wanna have fun?',
  responseA: 'yes',
  responseB: 'no',
  responseC: 'maybe so',
  responseD: 'response D',
  correct: 'yes',
  resource: 'https://en.wikipedia.org/wiki/Girls_Just_Want_to_Have_Fun'},

  {question: 'Is it raining men?',
  responseA: 'halleujah',
  responseB: 'yes',
  responseC: 'no',
  responseD: 'maybe so',
  correct: 'halleujah',
  resource: 'https://en.wikipedia.org/wiki/It%27s_Raining_Men'}
]

function App() {

let [progress, setProgress] = useState(0);
let [response, setResponse] = useState(0);
let [score, setScore] = useState(0);
let [failText, setFail]= useState('');

function currentQuestion() {
  if(progress >= questionBank.length) {
    //quiz stops once we run out of questions
    return questionBank[questionBank.length - 1];
  } else {
    return questionBank[progress];
  }
}

function endQuiz() {
  if(progress > questionBank.length) {
    console.log('You completed the quiz!');
  }
}

//Would like to find a better way to identify the clicked button and response
const submitA = () => {
  setResponse(response = 1);
  evaluate();
  setProgress(progress + 1);
  endQuiz();
}

const submitB = () => {
  setResponse(response = 2);
  evaluate();
  setProgress(progress + 1);
  endQuiz();
}

const submitC = () => {
  setResponse(response = 3);
  evaluate();
  setProgress(progress + 1);
  endQuiz();
}
const submitD = () => {
  setResponse(response = 4);
  evaluate();
  setProgress(progress + 1);
  endQuiz();
}


const evaluate = () => {
  const questionArray = Object.values(currentQuestion());
  if (progress < questionBank.length &&
    questionArray[response] === questionArray[5]) {
    setScore(score + 1);
  } else if (progress < questionBank.length) {
    setFail(failText = "You didn't get that one right, but you can learn more "
    + "about this subject at the provided link " + currentQuestion().resource);
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ currentQuestion().question }</h1>
          <h2>Score: {score} </h2>
          <p>{ failText }</p>
            <button id="responseA" onClick={() => submitA()}>
            { currentQuestion().responseA } </button>
            <button id="responseB" onClick={() => submitB()}>
            { currentQuestion().responseB }</button>
            <button id="responseC" onClick={() => submitC()}>
            { currentQuestion().responseC }</button>
            <button id="responseD" onClick={() => submitD()}>
            { currentQuestion().responseD }</button>
      </header>
    </div>
  );
}



//let questionCounter = 0;




export default App;

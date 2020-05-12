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
  responseD: 'kinda',
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

//main app
function App() {

  //setting up our states
  let [progress, setProgress] = useState(0);
  let [response, setResponse] = useState(0);
  let [score, setScore] = useState(0);
  let [failText, setFail] = useState('');

  let answerArray = [];
  // an array of bools to track which questions were answered correctly
  let gradeArray = [];


//find the current question and present the relevent information
  function currentQuestion() {
    if(progress >= questionBank.length) {
      //quiz stops once we run out of questions
      return questionBank[questionBank.length - 1];
      } else {
        return questionBank[progress];
      }
  }

  //Would like to find a better way to identify the clicked button and response
  const submitA = () => {
    setResponse(response = 1);
    evaluate();
    setProgress(progress + 1);
    answerArray.push('a');
  }

  const submitB = () => {
    setResponse(response = 2);
    evaluate();
    setProgress(progress + 1);
    answerArray.push('b');
  }

  const submitC = () => {
    setResponse(response = 3);
    evaluate();
    setProgress(progress + 1);
    answerArray.push('c');
  }
  const submitD = () => {
    setResponse(response = 4);
    evaluate();
    setProgress(progress + 1);
    answerArray.push('d');
  }


  const evaluate = () => {
    const currentArray = Object.values(currentQuestion());
    if (progress < questionBank.length &&
      currentArray[response] === currentArray[5]) {
        setScore(score + 1);

    } else if (progress < questionBank.length) {
      setFail(failText = "You didn't get that one right, but you can learn more "
      + "about this subject at the provided link " + currentQuestion().resource);
    }
  }

//generating a report based on the given responses
  const report = () => {
    const reportArray = [];
    for (let i = 0; i++; i < answerArray.length) {
      if(answerArray[i] === 'a') {
        reportArray.push(questionBank[i].responseA);
      }

      else if (answerArray[i] === 'b') {
        reportArray.push(questionBank[i].responseB);
      }

      else if (answerArray[i] === 'c') {
        reportArray.push(questionBank[i].responseC);
      }

      else if (answerArray[i] === 'd') {
        reportArray.push(questionBank[i].responseD);
      }
    }

    for (let j = 0; j++; j < questionBank.length) {
      if (reportArray[j] === questionBank[j].answer) {
        gradeArray.push(true);
      } else {
        gradeArray.push(false);
      }
    }
  }


function gradeQuiz(index) {
  if (gradeArray[index] === false) {
    return questionBank[index].resource;
  }
}
  //report card
  if (progress >= questionBank.length) {
    //Create an array of questions

    return(
      <div>
        <h1>{ score }</h1>
          <li>{ questionBank[0].question }</li>
            <p>{ gradeQuiz(0) }</p>
          <li>{ questionBank[1].question }</li>
            <p>{ gradeQuiz(1) }</p>
      </div>
    );

  } else {
    //Main Quiz
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
}


export default App;

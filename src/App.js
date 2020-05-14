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
  let [feedbackText, setFeedbackText] = useState('');
  //an array filled with the result of a users submissions
  let [correctionArray, setCorrectionArray] = useState([]);

//find the current question and present the relevent information
  function currentQuestion() {
    if(progress >= questionBank.length) {
      //quiz stops once we run out of questions
      return questionBank[questionBank.length - 1];
      } else {
        return questionBank[progress];
      }
  }
//evaluates and records which responses are correct, then iterates progress by 1
  const evaluate = () => {
    const currentArray = Object.values(currentQuestion());

    if (progress < questionBank.length &&
      currentArray[response] === currentArray[5]) {

        setCorrectionArray(correctionArray.concat('Correct!'));
        setFeedbackText(feedbackText = 'Great Job!')
        setScore(score + 1);

    } else if (progress < questionBank.length) {

      setCorrectionArray(correctionArray.concat(`Incorrect, the correct answer is:
        ${currentQuestion().correct}`));
      setFeedbackText(feedbackText = 'Better Luck Next Time!')
    }
    setProgress(progress + 1);
  }

// functions that track which button is pressed until it can be recorded in evaluate
//very redundant, I would like to bring these down to one component if possible
  const submitA = () => {
    setResponse(response = 1);
    evaluate();
  }

  const submitB = () => {
    setResponse(response = 2);
    evaluate();
  }

  const submitC = () => {
    setResponse(response = 3);
    evaluate();
  }
  const submitD = () => {
    setResponse(response = 4);
    evaluate();
  }

  //report card
  if (progress >= questionBank.length) {
    return(
      <div>
        <h1>Score: { score }</h1>
          <li>{ questionBank[0].question }</li>
            <p>{ correctionArray[0] }
            </p>
            <p> Learn more at { questionBank[0].resource }
            </p>

          <li>{ questionBank[1].question }</li>
            <p>{ correctionArray[1] }
            </p>
            <p> Learn more at: { questionBank[1].resource }
            </p>
      </div>
    );

  } else {
    //Main Quiz
    return (
      <div className="App">
        <header className="App-header">
          <h1>{ currentQuestion().question }</h1>
          <h2>Score: {score} </h2>
            <p>{ feedbackText }</p>
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

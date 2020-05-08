import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>{activeQuestion}
          </h1>
          <div className="responseButtons">
            <button>{ questionBank[questionCounter].responseA }</button>
            <button>{ questionBank[questionCounter].responseB }</button>
            <button>{ questionBank[questionCounter].responseC }</button>
            <button>{ questionBank[questionCounter].responseD }</button>
          </div>
      </header>
    </div>
  );
}

export const activeResponses = {
  responseA: 'yes',
  responseB: 'no',
  responseC: 'maybe so',
  responseD: 'response D'
};



const questionBank = [
  {question: 'Do girls just wanna have fun?',
  responseA: 'yes',
  responseB: 'no',
  responseC: 'maybe so',
  responseD: 'response D'},

  {question: 'Is it raining men?',
  responseA: 'halleujah',
  responseB: 'yes',
  responseC: 'no',
  responseD: 'maybe so'}
]


let questionCounter = Math.floor(Math.random() * Math.floor(questionBank.length));
export const activeQuestion = questionBank[questionCounter].question;
export default App;

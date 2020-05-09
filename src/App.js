import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
//will need a logo
import logo from './logo.svg';
import './App.css';

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

let quizIterator = 0;
let aText = '';

function App() {

const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{questionBank[quizIterator].question}
        </h1>
          <button onClick={() => setCount(count +1)}>
          {questionBank[count].responseA}</button>
          <button>{ questionBank[quizIterator].responseB }</button>
          <button>{ questionBank[quizIterator].responseC }</button>
          <button>{ questionBank[quizIterator].responseD }</button>
      </header>
    </div>
  );
}



//let questionCounter = 0;

//export let activeQuestion = questionBank[questionIterator].question;




export default App;

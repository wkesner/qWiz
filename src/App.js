import React from 'react';
import ReactDOM from 'react-dom';
import React {useState} from 'react';
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


function iterateQuiz (i) {
  quizText = useState(questionBank[i].responseA);
  aText = quizText;
}

function App {

const [quizText, iterateQuiz] = useState(questionBank[0].responseA);
aText = quizText;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{questionBank[quizIterator].question}
        </h1>
          <button onClick={() => iterateQuiz(1)}>
          {aText}</button>
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

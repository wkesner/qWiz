import React from 'react';
import render from 'react-dom';

import { store } from './reducer';
import { boundIncrementProgress } from './ActionCreator';

const finishMaker = () => {
  boundIncrementProgress();
}

const questionObject = {
  question: ' ',
  responseA: ' ',
  responseB: ' ',
  responseC: ' ',
  responseD: ' ',
  correct: ' ',
  resource: ' ',
}

const localQuizArray = [];

const logQuestion = id => {
  switch(id) {
    case "Question":
      if (document.getElementById("Question").value != null) {
        const value = document.getElementById("Question").value;
        questionObject.question = value;
        console.log(questionObject.question);
      }
      break;
  }
}

export class Quizmaker extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='Quizmaker'>
        <h1> MAKE YOUR QUIZ </h1>
          <div>
            <label>Question:
              <input type="text" id="Question" value=' ' onChange={logQuestion('Question')}/>
              <script>
                {console.log(questionObject.question)}
              </script>
            </label>
              <br></br>
            <label>Response A:
              <input type="text" id="Response A"/>
            </label>
              <br></br>
            <label>Response B:
              <input type="text" id="Response B"/>
            </label>
              <br></br>
            <label>Response C:
              <input type="text" id="Response C"/>
            </label>
              <br></br>
            <label>Response D:
              <input type="text" ui="Response D"/>
            </label>
              <br></br>
            <label>Answer:
              <input type="text" id="Answer"/>
            </label>
              <br></br>
            <label>Link to learn more:
              <input type="text" id="Resource"/>
            </label>
              <br></br>
            <button>Add Question</button>
            <button>Finish Quiz</button>
          </div>
      </div>

    )
  }
}

import { database, questionBank, getStore } from './App';
import { store } from './reducer';
import { selectCurrentQuestion, selectCurrentQuestionArray } from './selectors';

import {
  boundIncrementScore,
  boundIncrementProgress,
  boundSubmitA,
  boundSubmitB,
  boundSubmitC,
  boundSubmitD,
  boundPositiveFeedback,
  boundNegativeFeedback,
  boundPositiveCorrection,
  boundNegativeCorrection,
} from './ActionCreator';

/*import {
selectProgress,
selectResponse,
} from './selectors';*/


/*const submissionToEntry = (submission) => {
  switch (submission) {
    case 'A':
      return 1;
      break;
    case 'B':
      return 2;
      break;
    case 'C':
      return 3;
      break;
    case 'D':
      return 4;
      break;
    default:
      return null;
  }
}*/

//evaluates and records which responses are correct, then iterates progress by 1
export const evaluate = () => {
  //const currentArray = Object.values(selectCurrentQuestion());
  console.log(selectCurrentQuestionArray());
  //correct answer
  console.log(' Score: ' + store.getState().score.score);
  console.log( 'Progress: ' + store.getState().progress.progress);
  if (store.getState().progress.progress < questionBank.length &&
    selectCurrentQuestionArray()[store.getState().response.response]
    === selectCurrentQuestionArray()[5]) {
      boundIncrementScore();
      boundPositiveCorrection();
      boundPositiveFeedback();
  //incorrect answer
} else if (store.getState().progress.progress < questionBank.length) {

    boundNegativeCorrection();
    boundNegativeFeedback();
  }
  boundIncrementProgress();

  console.log(selectCurrentQuestionArray());
  console.log(selectCurrentQuestionArray()[store.getState().response.response])
  console.log( 'Score: ' + store.getState().score.score);
  console.log( 'Progress: ' + store.getState().progress.progress);
}

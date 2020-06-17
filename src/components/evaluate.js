import { currentQuestion, database, questionBank, getStore } from './App';

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


const submissionToEntry = (submission) => {
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
}

//evaluates and records which responses are correct, then iterates progress by 1
export const evaluate = () => {
  const currentArray = Object.values(currentQuestion());

  //correct answer
  if (getStore().getState().progress < questionBank.length &&
    currentArray[submissionToEntry(getStore().getState().response)] === currentArray[5]) {

      boundPositiveCorrection();
      boundPositiveFeedback();
      boundIncrementScore();


  //incorrect answer
} else if (getStore().getState().progress < questionBank.length) {

    boundNegativeCorrection();
    boundNegativeFeedback();
  }
  boundIncrementProgress();

}

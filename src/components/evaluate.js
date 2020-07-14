import { database } from './App';
import { store } from './reducer';
import { selectCurrentQuestionArray } from './selectors';

import {
  boundIncrementScore,
  boundIncrementProgress,
  boundPositiveFeedback,
  boundNegativeFeedback,
  boundPositiveCorrection,
  boundNegativeCorrection,
} from './ActionCreator';

//evaluates and records which responses are correct, then iterates progress by 1
export const evaluate = () => {
  const score = store.getState().score.score;
  const progress = store.getState().progress.progress;
  const response = store.getState().response.response;
  const quizId = store.getState().quizId.quizId;
  const localBank = database.quizArray[quizId];

  //const currentArray = Object.values(selectCurrentQuestion());
  console.log(selectCurrentQuestionArray());
  //correct answer
  console.log(' Score: ' + score);
  console.log( 'Progress: ' + progress);
  if (progress < localBank.length &&
    selectCurrentQuestionArray()[response]
    === selectCurrentQuestionArray()[5]) {
      boundIncrementScore();
      boundPositiveCorrection();
      boundPositiveFeedback();
  //incorrect answer
} else if (store.getState().progress.progress < localBank.length) {

    boundNegativeCorrection();
    boundNegativeFeedback();
  }
  boundIncrementProgress();
}

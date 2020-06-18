import { currentQuestion } from './App';

let score = 0;
export const addScore = () => ({
  type: 'INCREMENTED_SCORE',
  payload: 1,
})


let progress = 0;
export const addProgress = () => ({
  type: 'INCREMENTED_PROGRESS',
  payload: progress + 1,
})


let feedbackText = ' ';
export const goodFeedback = () => ({
  type: 'GOT_FEEDBACK_SUCCESS',
  payload: 'Great Job!',
})
export const badFeedback = () => ({
  type: "GOT_FEEDBACK_FAIL",
  payload: 'Better Luck Next Time!',
})


let submissionChar = ' ';
export const submitA = () => ({
  type: 'SUBMITTED_RESPONSE_A',
  payload: 'A',
})
export const submitB = () => ({
  type: 'SUBMITTED_RESPONSE_B',
  payload: 'B',
})
export const submitC = () => ({
  type: 'SUBMITTED_RESPONSE_C',
  payload: 'C',
})
export const submitD = () => ({
  type: 'SUBMITTED_RESPONSE_D',
  payload: 'D',
})


let correctionArray = [];
export const addPositive = () => ({
  type: 'POSITIVE_CORRECTION_ARRAY_ADD',
  payload: correctionArray.concat('Correct!'),
})
export const addNegative = () => ({
  type: 'NEGATIVE_CORRECTION_ARRAY_ADD',
  //payload missing concatinated text for correct answer as found in question array
  payload: correctionArray.concat('Incorrect, the correct answer is: '),
})

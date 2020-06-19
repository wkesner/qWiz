import { currentQuestion } from './App';

let score = 0;
const addScore = () => ({
  type: 'INCREMENTED_SCORE',
  payload: 1,
})
const resetScore = () => ({
  type: 'SCORE_RESET',
  payload: 0,
})

let progress = 0;
export const addProgress = () => ({
  type: 'INCREMENTED_PROGRESS',
  payload: progress + 1,
})
export const resetProgress = () => ({
  type: 'PROGRESS_RESET',
  payload: 0,
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


let submissionVal = null;
export const submitA = () => ({
  type: 'SUBMITTED_RESPONSE_A',
  payload: 1, //uses a number to this to the question array, others follow
})
export const submitB = () => ({
  type: 'SUBMITTED_RESPONSE_B',
  payload: 2,
})
export const submitC = () => ({
  type: 'SUBMITTED_RESPONSE_C',
  payload: 3,
})
export const submitD = () => ({
  type: 'SUBMITTED_RESPONSE_D',
  payload: 4,
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

import { bindActionCreators } from 'redux';
//import rootReducer from './reducer';
import { store }  from './reducer';


//score
export const doIncrementScore = payload => ({ type: 'INCREMENTED_SCORE', payload: 1})
export const doResetScore = () => ({ type: 'SCORE_RESET', payload: 0})

export const boundIncrementScore =
bindActionCreators(doIncrementScore, store.dispatch);
export const boundResetScore =
bindActionCreators(doResetScore, store.dispatch);


//progress
export const doIncrementProgress = () => ({type: 'INCREMENTED_PROGRESS',
payload: 1})
export const doDecrementProgress = () => ({type: 'DECREMENTED_PROGRESS',
payload: -1})
export const doResetProgress = () => ({type: 'PROGRESS_RESET',
payload: 0})
export const doMakerProgress = () => ({type: 'PROGRESS_MAKER',
payload: -2})

export const boundIncrementProgress =
bindActionCreators(doIncrementProgress, store.dispatch);
export const boundDecrementProgress =
bindActionCreators(doDecrementProgress, store.dispatch);
export const boundResetProgress =
bindActionCreators(doResetProgress, store.dispatch);
export const boundMakerProgress =
bindActionCreators(doMakerProgress, store.dispatch);


//Quiz Ids and picking the quiz
export const doIncrementId = () => ({type: 'INCREMENTED_ID', payload: 1});
export const doResetId = () => ({type: 'RESET_ID', payload: 0});

export const boundIncrementId = bindActionCreators(doIncrementId, store.dispatch);
export const boundResetId = bindActionCreators(doResetId, store.dispatch);


//responses
export const doSubmitA = () => ({ type: 'SUBMITTED_RESPONSE_A', payload: 1 })
export const doSubmitB = () => ({ type: 'SUBMITTED_RESPONSE_B', payload: 2 })
export const doSubmitC = () => ({ type: 'SUBMITTED_RESPONSE_C', payload: 3 })
export const doSubmitD = () => ({ type: 'SUBMITTED_RESPONSE_D', payload: 4 })

export const boundSubmitA =
bindActionCreators(doSubmitA, store.dispatch);
export const boundSubmitB =
bindActionCreators(doSubmitB, store.dispatch);
export const boundSubmitC =
bindActionCreators(doSubmitC, store.dispatch);
export const boundSubmitD =
bindActionCreators(doSubmitD, store.dispatch);

//feedback
export const doPositiveFeedback = () => ({ type: 'GOT_FEEDBACK_SUCCESS',
payload: 'Great Job!'})
export const doNegativeFeedback = () => ({type: 'GOT_FEEDBACK_FAIL',
payload: 'Better luck next time!'})

export const boundPositiveFeedback =
bindActionCreators(doPositiveFeedback, store.dispatch);
export const boundNegativeFeedback =
bindActionCreators(doNegativeFeedback, store.dispatch);

//correction array
export const doPositiveToCorrectionArray = () => ({ type: 'POSITIVE_CORRECTION_ARRAY_ADD',
payload: 'Correct!'})
export const doNegativeToCorrectionArray = () => ({ type: 'NEGATIVE_CORRECTION_ARRAY_ADD',
payload: 'Incorrect, the correct answer is: '})

export const boundPositiveCorrection =
bindActionCreators(doPositiveToCorrectionArray, store.dispatch);
export const boundNegativeCorrection =
bindActionCreators(doNegativeToCorrectionArray, store.dispatch);

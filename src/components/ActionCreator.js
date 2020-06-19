import { bindActionCreators } from 'redux';
//import rootReducer from './reducer';
import { store }  from './reducer';
import { getStore } from './App';


//score
const doIncrementScore = payload => ({ type: 'INCREMENTED_SCORE', payload: 1})
const doResetScore = () => ({ type: 'SCORE_RESET', payload: 0})

export const boundIncrementScore =
bindActionCreators(doIncrementScore, store.dispatch);
export const boundResetScore =
bindActionCreators(doResetScore, store.dispatch);


//progress
const doIncrementProgress = () => ({type: 'INCREMENTED_PROGRESS',
payload: 1})
const doResetProgress = () => ({type: 'PROGRESS_RESET',
payload: 0})

export const boundIncrementProgress =
bindActionCreators(doIncrementProgress, store.dispatch);
export const boundResetProgress =
bindActionCreators(doResetProgress, store.dispatch);

//responses
const doSubmitA = () => ({ type: 'SUBMITTED_RESPONSE_A', payload: 1 })
const doSubmitB = () => ({ type: 'SUBMITTED_RESPONSE_B', payload: 2 })
const doSubmitC = () => ({ type: 'SUBMITTED_RESPONSE_C', payload: 3 })
const doSubmitD = () => ({ type: 'SUBMITTED_RESPONSE_D', payload: 4 })

export const boundSubmitA =
bindActionCreators(doSubmitA, store.dispatch);
export const boundSubmitB =
bindActionCreators(doSubmitB, store.dispatch);
export const boundSubmitC =
bindActionCreators(doSubmitC, store.dispatch);
export const boundSubmitD =
bindActionCreators(doSubmitD, store.dispatch);

//feedback
const doPositiveFeedback = () => ({ type: 'GOT_FEEDBACK_SUCCESS',
payload: 'Great Job!'})
const doNegativeFeedback = () => ({type: 'GOT_FEEDBACK_FAIL',
payload: 'Better luck next time!'})

export const boundPositiveFeedback =
bindActionCreators(doPositiveFeedback, store.dispatch);
export const boundNegativeFeedback =
bindActionCreators(doNegativeFeedback, store.dispatch);

//correction array
const doPositiveToCorrectionArray = () => ({ type: 'POSITIVE_CORRECTION_ARRAY_ADD',
payload: 'Correct!'})
const doNegativeToCorrectionArray = () => ({ type: 'NEGATIVE_CORRECTION_ARRAY_ADD',
payload: 'Incorrect, the correct answer is: '})

export const boundPositiveCorrection =
bindActionCreators(doPositiveToCorrectionArray, store.dispatch);
export const boundNegativeCorrection =
bindActionCreators(doNegativeToCorrectionArray, store.dispatch);

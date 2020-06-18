import { bindActionCreators } from 'redux';
//import rootReducer from './reducer';
import { store }  from './reducer';
import { getStore } from './App';


//score
const doIncrementScore = () => ({ type: 'INCREMENTED_SCORE',
payload: getStore().getState().progress.score + 1})

export const boundIncrementScore = () =>
bindActionCreators(doIncrementScore(), store.dispatch);


//progress
const doIncrementProgress = () => ({type: 'INCREMENTED_PROGRESS',
payload: getStore().getState().progressCount.progress + 1})

export const boundIncrementProgress = () =>
bindActionCreators(doIncrementProgress(), store.dispatch);


//responses
const doSubmitA = () => ({ type: 'SUBMITTED_RESPONSE_A', payload: 'A'})
const doSubmitB = () => ({ type: 'SUBMITTED_RESPONSE_B', payload: 'B'})
const doSubmitC = () => ({ type: 'SUBMITTED_RESPONSE_C', payload: 'C'})
const doSubmitD = () => ({ type: 'SUBMITTED_RESPONSE_D', payload: 'D'})

export const boundSubmitA = () =>
bindActionCreators(doSubmitA(), store.dispatch);
export const boundSubmitB = () =>
bindActionCreators(doSubmitB(), store.dispatch);
export const boundSubmitC = () =>
bindActionCreators(doSubmitC(), store.dispatch);
export const boundSubmitD = () =>
bindActionCreators(doSubmitD(), store.dispatch);

//feedback
const doPositiveFeedback = () => ({ type: 'GOT_FEEDBACK_SUCCESS',
payload: 'Great Job!'})
const doNegativeFeedback = () => ({type: 'GOT_FEEDBACK_FAIL',
payload: 'Better luck next time!'})

export const boundPositiveFeedback = () =>
bindActionCreators(doPositiveFeedback(), store.dispatch);
export const boundNegativeFeedback = () =>
bindActionCreators(doNegativeFeedback(), store.dispatch);

//correction array
const doPositiveToCorrectionArray = () => ({ type: 'POSITIVE_CORRECTION_ARRAY_ADD',
payload: 'Correct!'})
const doNegativeToCorrectionArray = () => ({ type: 'NEGATIVE_CORRECTION_ARRAY_ADD',
payload: 'Incorrect, the correct answer is: '})

export const boundPositiveCorrection = () =>
bindActionCreators(doPositiveToCorrectionArray(), store.dispatch);
export const boundNegativeCorrection = () =>
bindActionCreators(doNegativeToCorrectionArray(), store.dispatch);

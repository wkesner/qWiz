import { combineReducers, createStore } from 'redux';
import { currentQuestion } from './App';



//export default scoreReducer;

const initialState = {
  score: 0,
  progress: 0,
  feedbackText: ' ',
  response: ' ',
  correctionArray: [],
}

//score
const scoreReducer = (state = initialState.score, action) => {
  if (action.type = 'INCREMENTED_SCORE') {
    return state + 1
    /*return Object.assign({}, initialState, {
      score: action.payload,
    })*/
  } else {
      return state
  }
}

//progress
const progressReducer = (state = 0, action) => {
  if (action.type = 'INCREMENTED_PROGRESS') {
    return Object.assign({}, state, {
      progress: action.payload,
    })
  } else {
     return state;
  }
}

//feedback text
const feedbackTextReducer = (state = ' ', action) => {
  if (action.type = 'GOT_FEEDBACK_SUCCESS') {
    return Object.assign({}, state, {
      feedbackText: 'Great Job!',
    })
  } else if (action.type = 'GOT_FEEDBACK_FAIL') {
      return Object.assign({}, state, {
        feedbackText: 'Better Luck Next Time!',
    })
  } else {
    return state;
  }
}

//responses
const submitReducer = (state = ' ', action) => {
  if (action.type = 'SUBMITTED_RESPONSE_A') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else if (action.type = 'SUBMITTED_RESPONSE_B') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else if (action.type = 'SUBMITTED_RESPONSE_C') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else if (action.type = 'SUBMITTED_RESPONSE_D') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else {
    return state;
  }
}

//correction array
const correctionArrayReducer = (state = [], action) => {
  if(action.type = 'POSITIVE_CORRECTION_ARRAY_ADD') {
    return Object.assign({}, state, {
      correctionArray: action.payload,
    })
  } else if (action.type = 'NEGATIVE_CORRECTION_ARRAY_ADD') {
    return Object.assign({}, state, {
      correctionArray: action.payload,
    })
  }
}

const rootReducer = combineReducers({
  score: scoreReducer,
  progress: progressReducer,
  feedbackText: feedbackTextReducer,
  response: submitReducer,
  correctionArray: correctionArrayReducer,
})

export const store = createStore(rootReducer);

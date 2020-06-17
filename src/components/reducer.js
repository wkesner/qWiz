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
const scoreReducer = (state = initialState, action) => {
  if (action.type = 'INCREMENTED_SCORE') {
    return Object.assign({}, initialState, {
      score: action.payload,
    })
  } else {
      return state;
  }
}

//progress
const progressReducer = (state = initialState, action) => {
  if (action.type = 'INCREMENTED_PROGRESS') {
    return Object.assign({}, initialState, {
      progress: action.payload,
    })
  } else {
     return state;
  }
}

//feedback text
const feedbackTextReducer = (state = initialState, action) => {
  if (action.type = 'GOT_FEEDBACK_SUCCESS') {
    return Object.assign({}, initialState, {
      feedbackText: 'Great Job!',
    })
  } else if (action.type = 'GOT_FEEDBACK_FAIL') {
      return Object.assign({}, initialState, {
        feedbackText: 'Better Luck Next Time!',
    })
  } else {
    return state;
  }
}

//responses
const submitReducer = (state = initialState, action) => {
  if (action.type = 'SUBMITTED_RESPONSE_A') {
    return Object.assign({}, initialState, {
      response: action.payload,
    })
  } else if (action.type = 'SUBMITTED_RESPONSE_B') {
    return Object.assign({}, initialState, {
      response: action.payload,
    })
  } else if (action.type = 'SUBMITTED_RESPONSE_C') {
    return Object.assign({}, initialState, {
      response: action.payload,
    })
  } else if (action.type = 'SUBMITTED_RESPONSE_D') {
    return Object.assign({}, initialState, {
      response: action.payload,
    })
  } else {
    return state;
  }
}

//correction array
const correctionArrayReducer = (state = initialState, action) => {
  if(action.type = 'POSITIVE_CORRECTION_ARRAY_ADD') {
    return Object.assign({}, initialState, {
      correctionArray: action.payload,
    })
  } else if (action.type = 'NEGATIVE_CORRECTION_ARRAY_ADD') {
    return Object.assign({}, initialState, {
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

export const store = createStore(rootReducer, initialState);

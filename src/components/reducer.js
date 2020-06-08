import { combineReducers, createStore } from 'redux';

const initialState = {
  score: 0,
  progress: 0,
  feedbackText: ' ',
}

const scoreReducer = (state = initialState, action) => {
  if (action.type = 'INCREMENTED_SCORE') {
    return Object.assign({}, initialState, {
      score: initialState.score + 1,
    })
  } else {
      return state;
  }
}

const progressReducer = (state = initialState, action) => {
  if (action.type = 'INCREMENTED_PROGRESS') {
    return Object.assign({}, initialState, {
      progress: initialState.progress + 1,
    })
  } else {
     return state;
  }
}

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

const rootReducer = combineReducers({
  scoreCount: scoreReducer,
  progressCount: progressReducer,
  feedbackTextSet: feedbackTextReducer,
})

export const store = createStore(rootReducer);

export default scoreReducer;

import { combineReducers, createStore } from 'redux';

export const initialState = {
  score: 0,
  progress: -1,
  quizId: 0,
  feedbackText: ' ',
  response: ' ',
  correctionArray: [],
}

//score
const scoreReducer = (state = initialState, action) => {
  //This one works
  if (action.type === 'INCREMENTED_SCORE') {
    return Object.assign({}, state, {
      score: state.score + action.payload,
    })

  } else if (action.type === 'SCORE_RESET') {
    return Object.assign({}, state, {
      score: initialState.score
    })
  } else {
      return state
  }
}

//progress
const progressReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENTED_PROGRESS') {
    return Object.assign({}, state, {
      progress: state.progress + 1,
    })
  } else if (action.type === 'DECREMENTED_PROGRESS') {
    return Object.assign({}, state, {
      progress: state.progress - 1,
    })
  } else if (action.type === 'PROGRESS_RESET') {
    return Object.assign({}, state, {
      progress: initialState.progress,
    })
  } else if (action.type === 'PROGRESS_QUIZMAKER') {
    return Object.assign({}, state, {
      progress: -2,
    })
  } else {
     return state;
  }
}

//choosing a quizId
const quizIdReducer = (state = initialState, action) => {

  if (action.type === 'INCREMENTED_ID') {
    return Object.assign({}, state, {
      quizId: state.quizId + action.payload,
    })
  } else if (action.type === 'RESET_ID') {
    return Object.assign({}, state, {
      quizId: action.payload,
    })
  } else if (action.type === 'ID_TO_POP') {
    return Object.assign({}, state, {
      quizId: action.payload,
    })
  } else if (action.type === 'ID_TO_EARTH') {
    return Object.assign({}, state, {
      quizId: action.payload,
    })
  } else {
    return state;
  }
}

//feedback text
const feedbackTextReducer = (state = ' ', action) => {
  if (action.type === 'GOT_FEEDBACK_SUCCESS') {
    return Object.assign({}, state, {
      feedbackText: 'Great Job!',
    })
  } else if (action.type === 'GOT_FEEDBACK_FAIL') {
      return Object.assign({}, state, {
        feedbackText: 'Better Luck Next Time!',
    })
  } else {
    return state;
  }
}

//responses
const submitReducer = (state = null, action) => {
  if (action.type === 'SUBMITTED_RESPONSE_A') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else if (action.type === 'SUBMITTED_RESPONSE_B') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else if (action.type === 'SUBMITTED_RESPONSE_C') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else if (action.type === 'SUBMITTED_RESPONSE_D') {
    return Object.assign({}, state, {
      response: action.payload,
    })
  } else {
    return state;
  }
}

//correction array
const correctionArrayReducer = (state = [], action) => {
  if(action.type === 'POSITIVE_CORRECTION_ARRAY_ADD') {
    return Object.assign({}, state, {
      //correctionArray: action.payload,
      correctionArray: []
    })
  } else if (action.type === 'NEGATIVE_CORRECTION_ARRAY_ADD') {
    return Object.assign({}, state, {
      //correctionArray: action.payload,
      correctionArray: []
    })
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  score: scoreReducer,
  progress: progressReducer,
  quizId: quizIdReducer,
  feedbackText: feedbackTextReducer,
  response: submitReducer,
  correctionArray: correctionArrayReducer,
})

export const store = createStore(rootReducer);

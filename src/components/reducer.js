import { combineReducers, createStore } from 'redux';

const scoreState = {
  score: 0,
}

const scoreReducer = (state = scoreState, action) => {
  if (action.type = 'INCREMENT_SCORE') {
    return Object.assign({}, scoreState, {
      score: action.payload,
    })
  } else {
      return state;
  }
}

export const store = createStore(scoreReducer);

export default scoreReducer;

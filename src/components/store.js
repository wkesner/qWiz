import { createStore } from 'redux';

let store = createStore(counter);

function score(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return state++
    case 'DECREMENT_SCORE':
      return state--
    default:
      return state    
  }
}

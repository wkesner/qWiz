import connect from 'react-redux';

import { store } from './reducer';
import { database, questionBank } from './App';

export const selectCurrentQuestion = () => {
  const progress = store.getState().progress.progress

  if ( progress >= questionBank.length) {
    return questionBank[questionBank.length -1];
  } else {
    return questionBank[progress];
  }
}

export const selectCurrentQuestionArray = () => {
  return Object.values(selectCurrentQuestion())
}
/*
export const selectScore = appState => ({
    score: appState.scoreCount,
})

export const selectProgress = appState => ({
    progress: appState.progressCount
})

export const selectResponse = appState => ({
    response: appState.submission
})
*/

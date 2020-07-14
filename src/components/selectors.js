import { store } from './reducer';
import { database } from './App';

export const selectCurrentQuestion = () => {
  const progress = store.getState().progress.progress;
  const quizId = store.getState().quizId.quizId;
  const localBank = database.quizArray[quizId];

  if ( progress >= localBank.length) {
    return localBank[localBank.length - 1];
  } else if (progress < localBank.length && progress > 0) {
    return localBank[progress];
  } else {
    return localBank[0];
  }
}

export const selectCurrentQuestionArray = () => {
  return Object.values(selectCurrentQuestion())
}

export const selectQuestionBank = () => {
  const quizId = store.getState().quizId.quizId;
  return database.quizArray[quizId];
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

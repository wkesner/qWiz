let score = 0;
export const addScore = () => ({
  type: 'INCREMENTED_SCORE',
  payload: score + 1,
})

let progress = 0;
export const addProgress = () => ({
  type: 'INCREMENTED_PROGRESS',
  payload: progress + 1,
})

let feedbackText = ' ';
export const goodFeedback = () => ({
  type: 'GOT_FEEDBACK_SUCCESS',
  payload: 'Great Job!',
})

export const badFeedback = () => ({
  type: "GOT_FEEDBACK_FAIL",
  payload: 'Better Luck Next Time!',
})

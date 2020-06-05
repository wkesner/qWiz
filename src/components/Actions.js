let score = 0;
export const addScore = () => ({
  type: 'INCREMENT_SCORE',
  payload: score++,
})

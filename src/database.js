import App from './App';

class question {
  constructor(id, question, responseA, responseB, responseC,responseD, correct,
    resource) {
    this.id = id;
    this.question = question;
    this.responseA = responseA;
    this.responseB = responseB;
    this.responseC = responseC;
    this.responseD = responseD;
    this.correct = correct;
    this.resource = resource;
  }
}
//an array that could store all the questions for any quiz, with no dynamic
//quiz constructor, this might be here for no reason
const quizArray = [];


//the first quiz
const quizId1 = [
  {question: 'Do girls just wanna have fun?',
  responseA: 'yes',
  responseB: 'no',
  responseC: 'maybe so',
  responseD: 'kinda',
  correct: 'yes',
  resource: 'https://en.wikipedia.org/wiki/Girls_Just_Want_to_Have_Fun'},

  {question: 'Is it raining men?',
  responseA: 'halleujah',
  responseB: 'yes',
  responseC: 'no',
  responseD: 'maybe so',
  correct: 'halleujah',
  resource: 'https://en.wikipedia.org/wiki/It%27s_Raining_Men'}
]

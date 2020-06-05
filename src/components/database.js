import App from './App';

//question class, to be used in a future, dynamic implementation of the main App
//will also have to reconfigure all functions to make room for id, which will be used in search
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
export const quizArray = [
  [{
    question: 'Do girls just wanna have fun?',
    responseA: 'yes',
    responseB: 'no',
    responseC: 'maybe so',
    responseD: 'kinda',
    correct: 'yes',
    resource: 'https://en.wikipedia.org/wiki/Girls_Just_Want_to_Have_Fun'
  },
  {
  question: 'Is it raining men?',
  responseA: 'halleujah',
  responseB: 'yes',
  responseC: 'no',
  responseD: 'maybe so',
  correct: 'halleujah',
  resource: 'https://en.wikipedia.org/wiki/It%27s_Raining_Men'
  }],

  [{
    question: "How hot is the earth's inner core?",
    responseA: 'lukewarm',
    responseB: '6000C, 10,800F',
    responseC: 'chill, insofar as it keeps us alive',
    responseD: '6900C, 13,000F',
    correct: '6000C, 10,800F',
    resource: 'https://www.livescience.com/29054-earth-core-hotter.html'
    },
    {
    question: "Is earths outer core solid or liquid?",
    responseA: 'solid',
    responseB: 'liquid',
    responseC: 'solidus',
    responseD: 'naked',
    correct: 'liquid',
    resource: 'https://www.livescience.com/29054-earth-core-hotter.html'
    }]
];
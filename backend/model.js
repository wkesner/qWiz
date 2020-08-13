const mongoose = require('mongoose');
import axios from 'axios';

this.state = {
  question: '',
  responseA: '',
  responseB: '',
  responseC: '',
  responseD: '',
  correct: '',
  resource: '',
  quizName: ''
}

axios.get('mongodb+srv://hi:funko@cluster0.hiwvv.azure.mongodb.net/qwiz').then(res => {
  this.setState({
    question: res.question
  });
});

componentDidMount(){
  axios.get('mongodb+srv://hi:funko@cluster0.hiwvv.azure.mongodb.net/qwiz')
  .then((res) =>{
    this.setState({
      question: res.data
    })
  })
}

const Schema = mongoose.Schema;

let quizQuestion = new Schema({
  question: {
    type: String
  },
  responseA: {
    type: String
  },
  responseB: {
    type: String
  },
  responseC: {
    type: String
  },
  responeseD: {
    type: String
  },
  correct: {
    type: String
  },
  resource: {
    type: String
  },
  quizName: {
    type: String
  }
});

module.exports = mongoose.model("quizQuestion", quizQuestion);

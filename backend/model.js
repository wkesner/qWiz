const mongoose = require('mongoose');
const axios = require('axios');


componentDidMount(){
  axios.get('mongodb+srv://hi:funko@cluster0.hiwvv.azure.mongodb.net/qwiz')
  .then((res) =>{
    this.setState({
      data: res.data
    })
  });
}

getDetails(){
  if(!this.state.buttonClicked){
    this.setState({
      buttonClicked: true
    })
  }
}

render() {
  return(

  )
}
this.state = {
  data: [],
  buttonClicked: false
}

axios.get('mongodb+srv://hi:funko@cluster0.hiwvv.azure.mongodb.net/qwiz').then(res => {
  this.setState({
    data: res.data
  });
});



this.state.data.map((data) =>{
  return(
    <React.Fragment>
      <p> <b>name</b> : {data.name} </p>
      <p><b>age</b> : {data.age}</p>
      <hr/>
    </React.Fragment>
  )
})


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

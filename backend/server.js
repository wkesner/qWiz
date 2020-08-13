//https://kb.objectrocket.com/mongo-db/create-react-app-with-mongodb-part-2-building-the-backend-900
//Above website refers to this file as index.js, however index.js already exists
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
app.use(corse());

mongoose.connect('mongodb+srv://hi:funko@cluster0.hiwvv.azure.mongodb.net/qwiz?retryWrites=true&w=majority',
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', function() {
  console.log('Connection with MongoDB was successful');
});


app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

let quizQuestion = require('./model');
const router = express.Router();

router.route('/getData').get(function(req, res) {
  detail.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

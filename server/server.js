const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
const randomNumber = Math.floor(Math.random() * ( 26 - 1 ) + 1); 
let allGuesses = require('./modules/guesses')

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/guesses', function(req, res){
  res.send(allGuesses)
  
})

app.post('/guesses', function (req, res){
  let round = req.body.guessesToAdd;
  allGuesses.push(round);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

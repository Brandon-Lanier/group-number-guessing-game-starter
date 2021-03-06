const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
const randomNumber = Math.floor(Math.random() * ( 26 - 1 ) + 1); 
console.log(randomNumber);
let guesses = []; //require('./modules/guesses')
// module.exports = guesses;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here

app.post('/guesses', function (req, res) {
  let round = req.body.guessesToAdd;
  for (let guess of round){
    if (guess.number == randomNumber){
      // winner();
      guess.result = 'Winnerrrrrr!';
      console.log(guess.result);
      
    } else if (guess.number > randomNumber) {
      // console.log('toomuuuuch') ;
      guess.result = 'Too much!';
      console.log(guess.result);
    } else {
      // console.log('Not enough');
      guess.result = 'Too Low!';
      console.log(guess.result);
    }
    }
  guesses.push(round);
  console.log(guesses);
  res.sendStatus(201)
})


app.get('/guesses', function(req, res){
  console.log('this is our get request', req.body);
  
  res.send(guesses)
  
})



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

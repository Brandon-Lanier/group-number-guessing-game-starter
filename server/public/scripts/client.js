$(document).ready(handleReady);


let counter = 0;

console.log('random num =', randomNumber);


function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-button').on('click', getInputs)
  $('#steve').on('click', '#party-time', log)
}

function getInputs(){ 
  
    let andyIn = $("#andy-in").val();
    let brandonIn = $("#brandon-in").val();
    let colinIn = $("#colin-in").val();
    let koffiIn = $("#koffi-in").val();
  if (andyIn && brandonIn && colinIn && koffiIn)  {
    $.ajax({
      method: 'POST',
      url: '/guesses',
      data: {
        guessesToAdd: {
          name: 'andy',
          number: Number(andyIn),
          result: ''
        },
        guessesToAdd: {
          name: 'brandon',
          number: Number(brandonIn),
          result: ''
        },
        guessesToAdd: {
          name: 'colin',
          number: Number(colinIn),
          result: ''
        },
        guessesToAdd: {
          name: 'koffi',
          number: Number(koffiIn),
          result: ''
        }
      }
    }).then(function(response){

    })
    // let obj = [{
    //   name: 'andy',
    //   number: Number(andyIn),
    //   result: '',
    // },
    // {
    //   name: 'brandon',
    //   number: Number(brandonIn),
    //   result: '',
    // },
    // {
    //   name: 'colin',
    //   number: Number(colinIn),
    //   result: '',
    // },
    // {
    //   name: 'koffi',
    //   number: Number(koffiIn),
    //   result: '',
    // }];
    counter ++
    allGuesses.push(obj);
    checkGuesses(obj);
   
   
    
  } else {
    alert('All inputs required');
  }
  $('.inputs').val('');
}

function checkGuesses(arr) {
  console.log(arr);
  for (let guess of arr){
    if (guess.number === randomNumber){
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
    renderGuesses()
  }

  function renderGuesses(){
    console.log('HELOOOOOOOO');
    console.log(allGuesses);
    $('.outDivs').empty();
    for (let i = 0; i < allGuesses.length; i++){
      console.log(allGuesses[i].name);
      for (let j = 0; j < allGuesses[i].length; j++){
        console.log(allGuesses[i][j].name);
        $(`#${allGuesses[i][j].name}`).append(`<p>Number: ${allGuesses[i][j].number}, Result: ${allGuesses[i][j].result}</p>`);
        winner(allGuesses[i][j]);
      }
      $('#counter-number').empty();
  } $('#counter-number').append(counter);
}

function winner(guess) {
  // confirm('You Have A Winner!  Play Again??')
  // console.log('this si the guess', guess);
  if(guess.result === 'Winnerrrrrr!'){
    $('#steve').append('<img src="https://cdn.mos.cms.futurecdn.net/FJgmXmkJyXrbEwgCwfjcaa.jpg">')
    $('#steve').append('<button id="party-time">New Game?</button>')
    
  }
  //show who won
  //play again?
  //reload the page


}

function log() {
  console.log('haaaaaaai');
  
}
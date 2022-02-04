$(document).ready(handleReady);


let counter = 0;

function handleReady() {
  console.log("jquery is loaded!");
  getGuesses();
  $('#submit-button').on('click', getInputs);
  // $('#steve').on('click', '#party-time', log);
  
}

function getGuesses(){
  $.ajax({
    method: 'GET',
    url: '/guesses'
  }).then(function(response){
    renderGuesses(response);
    console.log(response);
    
  })
}


function getInputs(){ 
    let andyIn = $("#andy-in").val();
    let brandonIn = $("#brandon-in").val();
    let colinIn = $("#colin-in").val();
    let koffiIn = $("#koffi-in").val();
    counter++;
    $('#counter-number').empty();
    $('#counter-number').append(counter);
  if (andyIn && brandonIn && colinIn && koffiIn)  {
    $.ajax({
      method: 'POST',
      url: '/guesses',
      data: {
        guessesToAdd: [{
          name: 'andy',
          number: Number(andyIn),
          result: ''
        },
        {
          name: 'brandon',
          number: Number(brandonIn),
          result: ''
        },
        {
          name: 'colin',
          number: Number(colinIn),
          result: ''
        },
        {
          name: 'koffi',
          number: Number(koffiIn),
          result: ''
        }
      ]}
      }).then(function(response){
      console.log('response is', response);
      getGuesses();
    })
  }$('.inputs').val('');
}
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
  //   counter ++
  //   allGuesses.push(obj);
  //   checkGuesses(obj);
   
   
    
  // } else {
  //   alert('All inputs required');
  // }
  // $('.inputs').val('');
// }

// function checkGuesses(arr) {
//   console.log(arr);
//   for (let guess of arr){
//     if (guess.number === randomNumber){
//       // winner();
//       guess.result = 'Winnerrrrrr!';
//       console.log(guess.result);
      
//     } else if (guess.number > randomNumber) {
//       // console.log('toomuuuuch') ;
//       guess.result = 'Too much!';
//       console.log(guess.result);
//     } else {
//       // console.log('Not enough');
//       guess.result = 'Too Low!';
//       console.log(guess.result);
//     }
//     }
//     renderGuesses()
//   }

  function renderGuesses(arr){
    // console.log('HELOOOOOOOO');
    // console.log(allGuesses);
    
    $('.outDivs').empty();
    for (let i = 0; i < arr.length; i++){
      console.log(arr[i].name);
      for (let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j].name);
        $(`#${arr[i][j].name}`).append(`<p>Number: ${arr[i][j].number}, Result: ${arr[i][j].result}</p>`);
       
        winner(arr[i][j]);
      }
      
  } 
 
}

function winner(guess) {
  // confirm('You Have A Winner!  Play Again??')
  console.log('this si the guess', guess);
  if(guess.result === 'Winnerrrrrr!'){
    $('#steve').append('<img src="https://cdn.mos.cms.futurecdn.net/FJgmXmkJyXrbEwgCwfjcaa.jpg">')
    $('#steve').append('<button id="party-time">New Game?</button>')
    
  }
  //show who won
  //play again?
  //reload the page

}

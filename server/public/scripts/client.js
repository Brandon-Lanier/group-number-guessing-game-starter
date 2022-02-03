$(document).ready(handleReady);

let allGuesses = [];
const randomNumber = Math.floor(Math.random() * ( 26 - 1 ) + 1); 
console.log('random num =', randomNumber);


function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-button').on('click', getInputs)
}

function getInputs(){ 
    // let roundGuesses = [];
    let andyIn = $("#andy-in").val();
    let brandonIn = $("#brandon-in").val();
    let colinIn = $("#colin-in").val();
    let koffiIn = $("#koffi-in").val();
  if (andyIn && brandonIn && colinIn && koffiIn)  {
    let obj = [{
      name: 'andy',
      number: Number(andyIn),
      result: '',
    },
    {
      name: 'brandon',
      number: Number(brandonIn),
      result: '',
    },
    {
      name: 'colin',
      number: Number(colinIn),
      result: '',
    },
    {
      name: 'koffi',
      number: Number(koffiIn),
      result: '',
    }];
    allGuesses.push(obj);
    checkGuesses(obj);
    // roundGuesses.push(obj);
   
    // counter ++
  } else {
    alert('All inputs required');
  }
  
}

function checkGuesses(arr) {
  console.log(arr);
  for (let guess of arr){
    if (guess.number === randomNumber){
      // console.log('Winner!')
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
    $('#us-container').empty()
    
    for (let i = 0; i < allGuesses.length; i++){
      console.log(allGuesses[i].name);
      for (let j = 0; j < allGuesses[i].length; j++){
        console.log(allGuesses[i][j].name);
        $('#us-container').append(`<p>${allGuesses[i][j].name}, ${allGuesses[i][j].number}, ${allGuesses[i][j].result}</p>`);

      }
  }
}

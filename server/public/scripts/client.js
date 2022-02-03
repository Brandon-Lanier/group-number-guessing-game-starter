$(document).ready(handleReady);

let allGuesses = [];

function handleReady() {
  console.log("jquery is loaded!")
  rando();
  $('#submit-button').on('click', getInputs)
}

function rando(){
let randomNumber = Math.floor(Math.random() * ( 26 - 1 ) + 1); 
  console.log(randomNumber);
  return randomNumber;
}

function getInputs(){ 
    let ourGuesses = [];
    let andyIn = $("#andy-in").val();
    let brandonIn = $("#brandon-in").val();
    let colinIn = $("#colin-in").val();
    let koffiIn = $("#koffi-in").val();
  if (andyIn && brandonIn && colinIn && koffiIn)  {
    let obj = [{
      andy: andyIn
    },
    {
      brandon: brandonIn
    },
    {
      colin: colinIn
    },
    {
      koffi: koffiIn
    }]
    ourGuesses.push(obj);
    allGuesses.push(ourGuesses)
  } else {
    alert('All inputs required')
  }
console.log(ourGuesses);
}


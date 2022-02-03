$(document).ready(handleReady);

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
    let andy = $("#andy-in").val();
    let brandon = $("#brandon-in").val();
    let colin = $("#colin-in").val();
    let koffi = $("#koffi-in").val();

console.log(andy, brandon, colin, koffi);

}
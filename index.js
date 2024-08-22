const app = document.getElementById("app");
//const gameBox = document.createElement('table');

const randomNum = Math.trunc(Math.random() * 100 + 1);
//console.log(Math.trunc(47.12));
//console.log(Math.trunc(47.86));

console.log(randomNum);

//create  prompt foe user guess

//setTimeout(() => {
//  console.log('This is a throwaway message');
//},2000)
//window.alert('Pick a number btw 1-100');

let guess;
console.log(guess);
let output = "";

window.alert("Welcome! please guess a number beween 1-100");

do {
  guess = parseInt(window.prompt("Pick a number btw 1-100"));
  if (randomNum === guess) {
    output = "You are such a smart cookie!";
  } else {
    output = `Sorry, the random number was ${randomNum}, please guess again`;
  
  }
  window.alert(output);
} while (randomNum !== guess);

let resultObject = {
  wins: 0,
  losses: 0
  }
let trial = document.querySelector('.score');
let migo = document.querySelector('.move');
let end =document.querySelector('.result');

let score = '';

let computerMove = '';
let playerMove = '';
let result = 0;

function oddPick (){
  
  let randomPick = Math.round(Math.random()*55);
  if (randomPick % 2 !=0){
    migo.innerHTML =` computer picked: ${randomPick}`;
    trial.innerHTML = 'you win!';
    resultObject.wins++;
    end.innerHTML=`wins: ${resultObject.wins} losses: ${resultObject.losses}`
  } else if (randomPick % 2 === 0) {
    migo.innerHTML = ` computer picked: ${randomPick}`;
    trial.innerHTML = 'you lose!';
    resultObject.losses++;
    end.innerHTML=`wins: ${resultObject.wins} losses: ${resultObject.losses}`
    
  }
  return resultObject;
};

function evenPick(){

  let randomPick = Math.round(Math.random()*50);
  if (randomPick % 2 !=0){
    migo.innerHTML =` computer picked: ${randomPick}`;
    trial.innerHTML = 'you lose!';
    resultObject.losses++;
    end.innerHTML=`wins: ${resultObject.wins} losses: ${resultObject.losses}`

  } else if (randomPick % 2 === 0) {
    migo.innerHTML = ` computer picked: ${randomPick}`;
    trial.innerHTML = `you win!`;
    resultObject.wins++;
    end.innerHTML=`wins: ${resultObject.wins} losses: ${resultObject.losses}`
};

  };
  
  
console.log(resultObject);

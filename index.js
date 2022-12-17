// Functions:
// -start new game
// -track score
// -choose hole
// -randomly selected and   could be the same as previous
// -mole pops out of hole
// -time
// how long for game
// set time difference for when mole(s) appear and dissappear
// -whack the mole to disappear and score point

const startGameEle = document.querySelector(".startGame");
const startButton = document.createElement("button");
startButton.innerHTML = "START";
startGameEle.appendChild(startButton);
startButton.classList.add("startButton");

let gamePoints = 0;
let gameTimeStart = false;

const curGamePts = document.querySelector(".score");

function startClock() {
  (gameTimeStart = true), 60000;
  gamePoints = 0;
}

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

startButton.addEventListener("click", function (){
  startGameEle.style.color = "green";
  curGamePts.textContent = 0;
  gameTimeStart = true;
  console.log(startClock());
});

const gameEle = document.querySelector(".game");

//function to create a given number of elements and append them to a parent element and giving a class name and corresponding number
function createNewEle(numEle, parentEle, className) {
  const callEle = document.createElement("div");
  parentEle.appendChild(callEle);

  for (let i = 0; i < numEle; i++) {
    const newEle = document.createElement("div");
    newEle.innerHTML = `This is a ${className}`;
    newEle.classList.add(className);
    newEle.setAttribute("id", i + 1);
    callEle.appendChild(newEle);
  }
}

//number of mole and hole elements to be created
let numHoles = 3;
const numMoles = numHoles;

//create div(s) for hole elements
createNewEle(numHoles, gameEle, "hole");

//create div(s) for mole elemenets
createNewEle(numMoles, gameEle, "mole");
// my createNewEle function did not allow me to run it on on a function that was just created from itself for now creating in .gameEle

//used this write to the page and verify the mole and hole elements were created
const moles = document.querySelectorAll(".mole");
const holes = document.querySelectorAll(".hole");
// console.log(chkHoles.length);
// for (const hole of chkHoles) {
//   console.log(hole.className);
// }
// should output ".hole #1", ".hole #2", etc.

// since my createNewEle function did not allow me to put thee moles into the holes,this is a workaround.
holes.forEach((hole, index) => {
  hole.appendChild(moles[index]);
});
const gameDiv = gameEle.lastChild;
gameEle.removeChild(gameDiv)
// for(i=0; i < chkMoles.length; i++){
//   chkHoles[i].appendChild(chkMoles)[i];
// }
// chkMoles.forEach((mole, i) => {
//   chkHoles[i].appendChild(mole);
// });

//select random hole(s)
function randHole(holes) {
  const popLoc = Math.floor(Math.random() * holes.length) + 1;
  const hole = holes(popLoc);
  if (hole === recentPosit) {
    return randHole(holes);
  }
}

//mole pops up random hole/time
function moleUp() {
  const whichHole = randHole(holes);
  const time = randTime(400, 2000);
  hole.classList.add("up");
  if (gameTimeStart === true) {
    function setTimeout() {
      hole.classList.remove("up");
      moleUp();
    }
    time;
  }
}
//whack the mole (the best part)
function bopIt() {}

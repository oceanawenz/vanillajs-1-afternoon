console.log("Hello");

let board = [];
function play(clickedId) {
  const clickedElement = document.getElementById(clickedId);
  const playerSpan = document.getElementById("player");
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedID] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }
  console.log(board);
}

const topLeft = [0];
const topCenter = [1];
const topRight = [2];
const middleLeft = [3];
const middleCenter = [4];
const middleRight = [5];
const bottomLeft = [6];
const bottomCenter = [7];
const bottomRight = [8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
  alert(`${topLeft} is the winner`);
  win = true;
  reset();
}
if (
  middleLeft !== undefined &&
  middleLeft === middleCenter &&
  middleLeft === middleRight
) {
  alert(`${middleLeft} is the winner`);
  win = true;
  reset();
}
if (
  bottomLeft !== undefined &&
  bottomLeft === bottomCenter &&
  bottomLeft === bottomRight
) {
  alert(`${bottomLeft} is the winner`);
  win = true;
  reset();
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
  alert(`${topLeft} is the winner`);
  win = true;
  reset();
}
if (
  topCenter !== undefined &&
  topCenter === middleCenter &&
  topCenter === bottomCenter
) {
  alert(`${topCenter} is the winner`);
  win = true;
  reset();
}
if (
  topRight !== undefined &&
  topRight === middleRight &&
  topRight === bottomRight
) {
  alert(`${topRight} is the winner`);
  win = true;
  reset();
}
if (
  topLeft !== undefined &&
  topLeft === middleCenter &&
  topLeft === bottomRight
) {
  alert(`${topLeft} is the winner`);
  win = true;
  reset();
}
if (
  bottomLeft !== undefined &&
  bottomLeft === middleCenter &&
  bottomLeft === topRight
) {
  alert(`${bottomLeft} is the winner`);
  win = true;
  reset();
}

let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  alert("Cat's game, there is no winner");
  win = true;
  reset();
}

function reset() {
  board = [];
  console.log(board);
  const resetTags = document.getElementsByTagName("td");
  for (let i = 0; i < resetTags.length; i++) {
    resetTags[i].innerText = "";
  }
}

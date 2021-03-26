// TODO: write your code here

const endGame = (playerNumber) => {
  // alert that the game is over!
  const racerTable = document.querySelector(".racer-table");
  // wait 2s
  setTimeout(() => {
    alert(`Game Over! Player ${playerNumber} wins!`);
  }, 500);
};

// move the car
const moveCar = (playerNumber) => {
  // find the current TD
  const currentTd = document.querySelector(`#player${playerNumber}-race .active`);
  // find the next TD
  const nextTd = currentTd.nextElementSibling;
  // make the currentTd lose the class active
  currentTd.classList.remove("active");
  // make the nextTd take the class active
  nextTd.classList.add("active");
  // if nextTd is the last one, end game
  if (nextTd.classList.contains("finish-line")) {
    endGame(playerNumber);
  }
};

// the user presses a key
document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    moveCar(1);
  }
  if (event.key === "p") {
    moveCar(2);
  }
});

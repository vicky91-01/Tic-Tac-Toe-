let buttons = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");        // renamed later to fix conflict
let newgamebtn = document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpattern = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [6,4,2],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      btn.style.color = "red"; 
      turnO = false;
    } else {
      btn.innerText = "X";
      btn.style.color = "blue"; 
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

// Fixed naming conflict and loop scoping
const resetGame = () => {
  turnO = true;
  enableButtons();
  msgcontainer.classList.add("hide");
};

const enableButtons = () => {
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.innerText = "";
  });
};

const disabledfunction = () => {
  buttons.forEach(btn => btn.disabled = true);
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disabledfunction();
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let posval1 = buttons[pattern[0]].innerText;
    let posval2 = buttons[pattern[1]].innerText;
    let posval3 = buttons[pattern[2]].innerText;
    if (posval1 !== "" && posval2 !== "" && posval3 !== "") {
      if (posval1 === posval2 && posval2 === posval3) {
        console.log("winner", posval1);
        showwinner(posval1);
        return;
      }
    }
  }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

let body = document.querySelector("body");
let container = document.querySelector(".main-container");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    container.classList.remove("hide"); // Show main container
    body.style.backgroundColor = "rgb(117, 210, 240)";//resetting the background color of the body
 };

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });
  
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    container.classList.add("hide"); // Hide main container
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  const showWinner = (winner) => {
    msg.innerText = `Congratulations!!! \n Winner is: ${winner}`;
    //additional style
    msg.style.fontSize = "3.5rem";
    msgContainer.style.marginTop = "7rem";
    body.style.backgroundColor = "black";
    //end
    msgContainer.classList.remove("hide");
    disableBoxes();
    container.classList.add("hide"); // Hide main container
  };
  
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  
  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);
  
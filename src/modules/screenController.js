import { GameController } from "./gameController";
import { Player } from "./playerFactory";

export default function ScreenController() {
  const startBtn = document.querySelector(".start-btn");
  const randomizeBtn = document.querySelector(".randomize-btn");
  const confirmBtn = document.getElementById("confirm-btn");

  let placeHolder = Player();
  let game = GameController();

  renderBoard(placeHolder, "computer");
  renderBoard(placeHolder, "human");

  function renderBoard(object, div) {
    const boardDiv = document.querySelector(`.${div}-board`);
    const thisBoard = object.playerBoard.board;
    thisBoard.forEach((element, indexY) => {
      element.forEach((item, indexX) => {
        const gridCell = document.createElement("button");
        gridCell.classList.add(div, "grid-cell");
        gridCell.setAttribute("data-coords", [indexY, indexX]);
        boardDiv.appendChild(gridCell);
        if (item.ship != null && div !== 'computer') {
            gridCell.classList.add('ship');
        }
        // if (item.ship != null) {
        //   gridCell.classList.add("ship");
        // }

        if (item.missedHit == true) {
          gridCell.classList.add("missed");
        }

        if (item.beenHit == true) {
          gridCell.classList.add("hit");
        }
      });
    });
  }

  function getPlayerName() {
    const playerNameInput = document.getElementById("name");

    return playerNameInput.value;
  }

  function displayNames(humanObj, computerObj) {
    const humanNameDiv = document.querySelector(".human-name");
    const computerNameDiv = document.querySelector(".computer-name");

    humanNameDiv.textContent = humanObj.playerName;
    computerNameDiv.textContent = computerObj.playerName;
  }

  // Not used as turns switch instantly
  function displayTurn() {
    const playerTurn = document.querySelector(".player-turn");
    playerTurn.textContent = `${game.getCurrentPlayer().playerName}'s turn`;
  }

  function displayWinnerAndEndGame() {
    const winnerDiv = document.querySelector(".winner-div");

    if (
      game.checkForWin(game.getHumanObject()) ||
      game.checkForWin(game.getComputerObject())
    ) {
      winnerDiv.textContent = game.returnWinner();
      disableComputerBoard();
    }
  }

  function makeCellsClickable() {
    const allCells = document.querySelectorAll(".grid-cell");
    allCells.forEach((element) => {
      element.addEventListener("click", (e) => {
        clearDOMBoards();
        playRoundsWithCheck(e);
        renderBoard(game.getHumanObject(), "human");
        renderBoard(game.getComputerObject(), "computer");
        displayWinnerAndEndGame();
        makeCellsClickable();
      });
    });
  }

  function playRoundsWithCheck(e) {
    let splitCoords = e.target.dataset.coords.split(",");
    let y = splitCoords[0];
    let x = splitCoords[1];

    if (
      game.getComputerBoard()[y][x].beenHit == true ||
      game.getComputerBoard()[y][x].missedHit === true
    ) {
      return;
    }

    game.playRound(y, x);
    game.playRound();
  }

  function disableHumanBoard() {
    const humanBoard = document.querySelector(".human-board");

    humanBoard.classList.add("no-click");
  }

  function disableComputerBoard() {
    const computerBoard = document.querySelector(".computer-board");

    computerBoard.classList.add("no-click");
  }

  function enableComputerBoard() {
    const computerBoard = document.querySelector(".computer-board");

    computerBoard.classList.remove("no-click");
  }

  function clearDOMBoards() {
    const humanBoard = document.querySelector(".human-board");
    const computerBoard = document.querySelector(".computer-board");
    const winnerDiv = document.querySelector(".winner-div");

    humanBoard.textContent = "";
    computerBoard.textContent = "";
    winnerDiv.textContent = "";
  }

  function showModal() {
    const nameModal = document.getElementById("name-dialog");

    nameModal.showModal();
  }

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    game.getHumanObject().updateName(getPlayerName());
    displayNames(game.getHumanObject(), game.getComputerObject());

    const nameModal = document.getElementById("name-dialog");
    nameModal.close();
  });

  startBtn.addEventListener("click", () => {
    makeCellsClickable();
  });

  randomizeBtn.addEventListener("click", () => {
    game.replaceBoards();
    clearDOMBoards();
    game.placeShipsRandomly();
    enableComputerBoard();
    renderBoard(game.getHumanObject(), "human");
    renderBoard(game.getComputerObject(), "computer");
  });

  disableHumanBoard();
  showModal();
}

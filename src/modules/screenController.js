import { GameController } from "./gameController";
import { Player, Computer } from "./playerFactory";


export default function ScreenController() {
    const startBtn = document.querySelector('.start-btn');
    const randomizeBtn = document.querySelector('.randomize-btn');

    let placeHolder = Player();

    renderBoard(placeHolder, 'computer');
    renderBoard(placeHolder, 'human');

    function getPlayerName() {
        const playerNameInput = document.getElementById('player-name');

        return playerNameInput.value;
    }

    function renderBoard(object, div) {
        const boardDiv = document.querySelector(`.${div}-board`);
        const thisBoard = object.playerBoard.board;
        thisBoard.forEach((element, indexY) => {
            element.forEach((item, indexX) => {
                const gridCell = document.createElement('button');
                gridCell.classList.add(div, 'grid-cell');
                gridCell.setAttribute('data-coords', [indexY, indexX])
                boardDiv.appendChild(gridCell)
                // if (item.ship != null && div !== 'computer') {
                //     gridCell.classList.add('ship');
                // }
                if (item.ship != null) {
                    gridCell.classList.add('ship');
                }

                if (item.missedHit == true) {
                    gridCell.classList.add('missed');
                }

                if (item.beenHit == true) {
                    gridCell.classList.add('hit');
                }

            })
        })
    }

    function displayNames(humanObj, computerObj) {
        const humanNameDiv = document.querySelector('.human-name');
        const computerNameDiv = document.querySelector('.computer-name');

        humanNameDiv.textContent = humanObj.playerName;
        computerNameDiv.textContent = computerObj.playerName;
    }

    function displayTurn() {
        const playerTurn = document.querySelector('.player-turn');
        playerTurn.textContent = `${game.getCurrentPlayer().playerName}'s turn`;
    }

    function displayWinnerAndEndGame() {
        const winnerDiv = document.querySelector('.winner-div');
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        winnerDiv.textContent = game.checkForWinner();

    }

    function makeCellsClickable() {
        const allCells = document.querySelectorAll('.grid-cell');
        allCells.forEach((element) => {
            element.addEventListener('click', (e) => {
                
                let splitCoords = e.target.dataset.coords.split(',');
                let y = splitCoords[0];
                let x = splitCoords[1];

                clearDOMBoards();
                game.playRound(y, x);
                game.playRound();
                // setTimeout(() => {
                //     game.playRound();
                //     console.log('timeout call');
                //     renderBoard(game.getHumanObject(), 'human');
                // }, 1000);
                renderBoard(game.getHumanObject(), 'human');
                renderBoard(game.getComputerObject(), 'computer');
                displayTurn();
                displayWinnerAndEndGame();
                makeCellsClickable();
                alternateDisableBoard();
            })
        })
    }

    function alternateDisableBoard() {
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        if (game.getCurrentPlayer().playerName === "Dave") {
            humanBoard.classList.add('no-click');
            computerBoard.classList.remove('no-click');
        } else {
            humanBoard.classList.remove('no-click');
            computerBoard.classList.add('no-click');
        }
    }

    function clearDOMBoards() {
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        humanBoard.textContent = '';
        computerBoard.textContent = '';
    }

    let game = GameController('Dave');
    alternateDisableBoard();
    
    startBtn.addEventListener('click', () => {
        displayNames(game.getHumanObject(), game.getComputerObject());
        makeCellsClickable();
        displayTurn();
    })

    randomizeBtn.addEventListener('click', () => {
        game.replaceBoards(); 
        clearDOMBoards();
        game.placeShipsRandomly();
        renderBoard(game.getHumanObject(), 'human');
        renderBoard(game.getComputerObject(), 'computer');
    })
}

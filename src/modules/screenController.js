import { GameController } from "./gameController";
import { Player, Computer } from "./playerFactory";


export default function ScreenController() {
    // let game = GameController('Dave');
    const startBtn = document.querySelector('.start-btn');

    let placeHolder = Player();

    renderBoard(placeHolder, 'computer');
    renderBoard(placeHolder, 'human');

    function getPlayerName() {
        const playerNameInput = document.getElementById('player-name');

        return playerNameInput.value;
    }

    // function initializeGame(playerName) {
    //     let game = GameController(playerName);

    //     return game;
    // }

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

            })
        })
    }

    function clearBoards() {
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        humanBoard.textContent = '';
        computerBoard.textContent = '';
    }

    function displayNames(humanObj, computerObj) {
        const humanNameDiv = document.querySelector('.human-name');
        const computerNameDiv = document.querySelector('.computer-name');

        humanNameDiv.textContent = humanObj.playerName;
        computerNameDiv.textContent = computerObj.playerName;
    }

    function makeCellsClickable() {
        const allCells = document.querySelectorAll('.grid-cell');

        allCells.forEach((element) => {
            element.addEventListener('click', (e) => {
                console.log('yo');
            })
        })
    }


    startBtn.addEventListener('click', () => {
        let game = GameController(getPlayerName());

        clearBoards();
        displayNames(game.getCurrentPlayer(), game.getOpponent());
        renderBoard(game.getCurrentPlayer(), 'human');
        renderBoard(game.getOpponent(), 'computer');
        makeCellsClickable();
    })
}


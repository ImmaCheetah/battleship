import { GameController } from "./gameController";
import { Player, Computer } from "./playerFactory";


export default function ScreenController() {
    const startBtn = document.querySelector('.start-btn');

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
                console.log(e.target.dataset.coords);
                


                let splitCoords = e.target.dataset.coords.split(',');
                let y = splitCoords[0];
                let x = splitCoords[1];

                // console.log(game.getCurrentPlayer());
                
                game.playRound(y, x);
                disableBoard()
            })
        })
    }

    function disableBoard() {
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
    let game = GameController('Dave');
    // const humanBoard = document.querySelector('.human-board');
    // const computerBoard = document.querySelector('.computer-board');

    // function addEventListenerToBoards(e) {
    //     const selectedSquare = e.target.dataset.coords.split(',');

    //     if (!selectedSquare) return;
    //     console.log(selectedSquare[0], selectedSquare[1]);
    //     game.playRound(selectedSquare[0], selectedSquare[1]);
    //     clearBoards();
    //     renderBoard(game.getHumanObject(), 'human');
    //     renderBoard(game.getComputerObject(), 'computer');
    // }

    // humanBoard.addEventListener('click', addEventListenerToBoards);
    // computerBoard.addEventListener('click', addEventListenerToBoards);
    disableBoard()
    startBtn.addEventListener('click', () => {

        clearBoards();
        displayNames(game.getHumanObject(), game.getComputerObject());
        renderBoard(game.getHumanObject(), 'human');
        renderBoard(game.getComputerObject(), 'computer');
        makeCellsClickable();
        // disableBoard()
    })
}

// game is created
// event listener is added to each board
// checks where on teh board was clicked using coordinates
// uses object to call attack method
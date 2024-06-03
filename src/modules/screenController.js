import { GameController } from "./gameController";
import { Player, Computer } from "./playerFactory";

export default function ScreenController() {
    const startBtn = document.querySelector('.start-btn');
    const randomizeBtn = document.querySelector('.randomize-btn');
    const confirmBtn = document.getElementById('confirm-btn');

    let placeHolder = Player();
    let game = GameController();

    renderBoard(placeHolder, 'computer');
    renderBoard(placeHolder, 'human');

    function getPlayerName() {
        const playerNameInput = document.getElementById('name');

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
                if (item.ship != null && div !== 'computer') {
                    gridCell.classList.add('ship');
                }
                // if (item.ship != null) {
                //     gridCell.classList.add('ship');
                // }

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

    // Not used as turns switch instantly
    function displayTurn() {
        const playerTurn = document.querySelector('.player-turn');
        playerTurn.textContent = `${game.getCurrentPlayer().playerName}'s turn`;
    }

    function displayWinnerAndEndGame() {
        const winnerDiv = document.querySelector('.winner-div');

        if (!game.getHumanObject().playerBoard.isBoardEmpty()) {
            winnerDiv.textContent = game.checkForWinner();
        }

    }

    function makeCellsClickable() {
        const allCells = document.querySelectorAll('.grid-cell');
        allCells.forEach((element) => {
            element.addEventListener('click', (e) => {
                clearDOMBoards();
                playRoundsWithCheck(e);
                renderBoard(game.getHumanObject(), 'human');
                renderBoard(game.getComputerObject(), 'computer');
                displayWinnerAndEndGame();
                makeCellsClickable();
                alternateDisableBoard();
            })
        })
    }

    function playRoundsWithCheck(e) {
        let splitCoords = e.target.dataset.coords.split(',');
        let y = splitCoords[0];
        let x = splitCoords[1];

        if (game.getComputerBoard()[y][x].beenHit == true || game.getComputerBoard()[y][x].missedHit === true) {
            return;
        }

        game.playRound(y, x);
        game.playRound();
    }

    function alternateDisableBoard() {
        const humanBoard = document.querySelector('.human-board');
        const computerBoard = document.querySelector('.computer-board');

        if (game.getCurrentPlayer() == game.getHumanObject()) {
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

    
    alternateDisableBoard();
    // alternateDisableBoard();
    showModal(); 

    function showModal() {
        const nameModal = document.getElementById('name-dialog');

        nameModal.showModal(); 
    }

    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();

        game.getHumanObject().updateName(getPlayerName())
        displayNames(game.getHumanObject(), game.getComputerObject());

        const nameModal = document.getElementById('name-dialog');
        nameModal.close();
    })
    
    startBtn.addEventListener('click', () => {
        makeCellsClickable();
    })

    randomizeBtn.addEventListener('click', () => {
        game.replaceBoards(); 
        clearDOMBoards();
        game.placeShipsRandomly();
        renderBoard(game.getHumanObject(), 'human');
        renderBoard(game.getComputerObject(), 'computer');
    })
}

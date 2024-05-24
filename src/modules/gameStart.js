import { Ship } from "./shipFactory";
import { Computer, Player } from "./playerFactory";

// Responsible for creating the players and placing the ships
export default function startGame() {
    const startBtn = document.querySelector('.start-btn');
    
    let placeHolder = Player()

    // Render initial blank boards with placeholder object
    renderBoard(placeHolder, 'computer');
    renderBoard(placeHolder, 'human');
    
    function getPlayerName() {
        const playerNameInput = document.getElementById('player-name');

        return playerNameInput.value;
    }

    function populatePlayerBoards(human, computer) {
        let humanShip1 = Ship(5);
        let humanShip2 = Ship(4);
        let humanShip3 = Ship(3);

        let cpuShip1 = Ship(5);
        let cpuShip2 = Ship(4);
        let cpuShip3 = Ship(3);

        human.placePlayerShip(humanShip1, 1, 1, true);
        human.placePlayerShip(humanShip2, 3, 3, true);
        human.placePlayerShip(humanShip3, 5, 5, false);

        computer.placePlayerShip(cpuShip1, 0, 0, true);
        computer.placePlayerShip(cpuShip2, 1, 3, true);
        computer.placePlayerShip(cpuShip3, 4, 4, false);

        console.log('Human Board', human.playerBoard.board);
        console.log('Computer Board', computer.playerBoard.board);
    }

    function renderBoard(object, div) {
        const boardDiv = document.querySelector(`.${div}-board`);
        const thisBoard = object.playerBoard.board;
        thisBoard.forEach((element, indexY) => {
            element.forEach((item, indexX) => {
                const gridCell = document.createElement('button');
                gridCell.classList.add('grid-cell');
                gridCell.setAttribute('data-coords', [indexY, indexX])
                boardDiv.appendChild(gridCell)
                if (item.ship != null && div !== 'computer') {
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
        computerNameDiv.textContent = computerObj.computerName;
    }

    startBtn.addEventListener('click', () => {
        let human = Player(getPlayerName());
        let computer = Computer();

        clearBoards();
        displayNames(human, computer);
        populatePlayerBoards(human, computer);
        renderBoard(computer, 'computer');
        renderBoard(human, 'human');
        console.log(human, computer);
    })
}
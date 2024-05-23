import { Gameboard } from "./gameboardFactory";
import { Ship } from "./shipFactory";
import { Computer, Player } from "./playerFactory";

export default function domTest() {
    const playerNameInput = document.getElementById('player-name');
    const confirmBtn = document.querySelector('.confirm-name');
    const populateBoardsBtn = document.querySelector('.populate-boards');
    
    // populate boards should create human and cpu objects
    // place 3 ships on each board
    let human = Player(playerNameInput.value);
    let computer = Computer();

    function populatePlayerBoards() {

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

        console.log(human.playerBoard.board);
        console.log(computer.playerBoard.board);
    }

    // populateBoardsBtn.addEventListener('click', populatePlayerBoards);
    populatePlayerBoards();
    renderBoard(human);
    
    confirmBtn.addEventListener('click', (e) => {
        console.log(playerNameInput.value);
        console.log(e.target.value);
    })

    // generate the human and computer board using the objects
    function renderBoard(object) {
    const boardDiv = document.querySelector('.boards-container');

    const board = object.playerBoard.board;
    console.log('player board length', board.length)
    board.forEach((element, indexY) => {
        element.forEach((item, indexX) => {
            const gridCell = document.createElement('button');
            gridCell.classList.add('grid-cell');
            gridCell.setAttribute('data-coords', [indexY, indexX])
            boardDiv.appendChild(gridCell)
            if (item.ship != null) {
                gridCell.classList.add('ship');
            }
            
        })
    })
}
}


import { Computer, Player } from "./playerFactory";
import { Ship } from "./shipFactory";

function GameController(humanName, computerName = 'Lil CPU') {
    let human = Player(humanName);
    let computer = Computer(computerName);

    let players = [human, computer];

    let currentPlayer = players[0];
    let opponent = players[1];

    
    
    const playRound = (y, x) => {
        // Check if player is human and call correct method on computer
        printRoundInfo();
        if (getCurrentPlayer() == players[0]) {
            opponent.receivePlayerAttack(y, x);
            console.log('This is computer board when current player is human', getComputerBoard())
        // If computer then call computerAttack on human
        } else {
            console.log('This is human board when current player is computer', getHumanBoard())
            currentPlayer.computerAttack(opponent);
        }
        console.log(checkForWinner())
        switchPlayerTurn();
    }

    const switchPlayerTurn = () => {
        if (getCurrentPlayer() == players[0]) {
            currentPlayer = players[1];
            opponent = players[0];
        } else {
            currentPlayer = players[0];
            opponent = players[1];
        }
    }

    const placeShipsOnBothBoards = () => {
        let humanShip1 = Ship(3);
        let humanShip2 = Ship(2);
        let humanShip3 = Ship(3);

        let cpuShip1 = Ship(3);
        let cpuShip2 = Ship(2);
        let cpuShip3 = Ship(3);

        human.placePlayerShip(humanShip1, 1, 1, true);
        human.placePlayerShip(humanShip2, 3, 3, true);
        // human.placePlayerShip(humanShip3, 5, 5, false);

        computer.placePlayerShip(cpuShip1, 0, 0, true);
        computer.placePlayerShip(cpuShip2, 1, 3, true);
        // computer.placePlayerShip(cpuShip3, 4, 4, false);
    }

    const checkForWinner = () => {
        if (getCurrentPlayer().playerBoard.allShipsSunk() == true) {
            return `${getOpponent().playerName} is the winner!`;
        }

        if (getOpponent().playerBoard.allShipsSunk() == true) {
            return `${getCurrentPlayer().playerName} is the winner!`;
        }
    }

    const printRoundInfo = () => {
        console.log(`It's ${getCurrentPlayer().playerName}'s turn`)
    }

    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    const getOpponent = () => {
        return opponent;
    }

    const getHumanBoard = () => {
        return human.playerBoard.board;
    }

    const getComputerBoard = () => {
        return computer.playerBoard.board;
    }

    placeShipsOnBothBoards();

    return {
        getCurrentPlayer, 
        getOpponent, 
        playRound, 
        getHumanBoard, 
        getComputerBoard, 
        switchPlayerTurn,
        printRoundInfo,
        checkForWinner
    }
}

export {GameController}
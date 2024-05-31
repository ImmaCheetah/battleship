import { Computer, Player } from "./playerFactory";
import { Ship } from "./shipFactory";

function GameController(humanName, computerName = 'Lil CPU') {
    let human = Player(humanName);
    let computer = Computer(computerName);

    let players = [human, computer];

    let currentPlayer = players[0];
    let opponent = players[1];
    
    const playRound = (y, x) => {
        if (human.playerBoard.isBoardEmpty()) {
            console.log('board is empty');
            return;
        }
        // Check if player is human and call correct method on computer
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
        printRoundInfo();
        console.log(`computer placed ships - ${getComputerObject().playerBoard.placedShips.length}`)
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

    const placeShipsRandomly = () => {
        let humanCruiser = Ship(2);
        let humanSub = Ship(3);
        let humanDestroyer = Ship(3);
        let humanBattleship = Ship(4);
        let humanCarrier = Ship(5);

        let computerCruiser = Ship(2);
        let computerSub = Ship(3);
        let computerDestroyer = Ship(3);
        let computerBattleship = Ship(4);
        let computerCarrier = Ship(5);

        human.placePlayerShipRandomly(humanCruiser);
        human.placePlayerShipRandomly(humanSub);
        human.placePlayerShipRandomly(humanDestroyer);
        human.placePlayerShipRandomly(humanBattleship);
        human.placePlayerShipRandomly(humanCarrier);

        computer.placePlayerShipRandomly(computerCruiser);
        computer.placePlayerShipRandomly(computerSub);
        computer.placePlayerShipRandomly(computerDestroyer);
        computer.placePlayerShipRandomly(computerBattleship);
        computer.placePlayerShipRandomly(computerCarrier);

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

    const replaceBoards = () => {
        human.playerBoard.generateBoard();
        computer.playerBoard.generateBoard();
    }

    const getCurrentPlayer = () => {
        return currentPlayer;
    }

    const getOpponent = () => {
        return opponent;
    }

    const getHumanObject = () => {
        return human;
    }

    const getComputerObject = () => {
        return computer;
    }

    const getHumanBoard = () => {
        return human.playerBoard.board;
    }

    const getComputerBoard = () => {
        return computer.playerBoard.board;
    }

    return {
        getCurrentPlayer, 
        getOpponent, 
        playRound, 
        getHumanBoard, 
        getComputerBoard,
        getComputerObject,
        getHumanObject,
        switchPlayerTurn,
        printRoundInfo,
        checkForWinner,
        placeShipsRandomly,
        replaceBoards
    }
}

export {GameController}
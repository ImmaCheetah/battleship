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
        let cruiser = Ship(2);
        let sub = Ship(3);
        let destroyer = Ship(3);
        let battleship = Ship(4);
        let carrier = Ship(5);

        human.placePlayerShipRandomly(cruiser);
        human.placePlayerShipRandomly(sub);
        human.placePlayerShipRandomly(destroyer);
        human.placePlayerShipRandomly(battleship);
        human.placePlayerShipRandomly(carrier);

        computer.placePlayerShipRandomly(cruiser);
        computer.placePlayerShipRandomly(sub);
        computer.placePlayerShipRandomly(destroyer);
        computer.placePlayerShipRandomly(battleship);
        computer.placePlayerShipRandomly(carrier);

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

    // placeShipsOnBothBoards();

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
        placeShipsRandomly
    }
}

export {GameController}
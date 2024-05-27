import { Computer, Player } from "./playerFactory";

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
            currentPlayer.computerAttack(human);
        }
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

    return {
        getCurrentPlayer, 
        getOpponent, 
        playRound, 
        getHumanBoard, 
        getComputerBoard, 
        switchPlayerTurn,
        printRoundInfo
    }
}

export {GameController}
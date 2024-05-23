import { Computer, Player } from "./playerFactory";

function GameController(humanName, computerName = 'Lil CPU') {
    let human = Player(humanName);
    let computer = Computer(computerName);

    let players = [human, computer];

    let currentPlayer = players[0];
    let opponent = players[1];
    
    const playRound = (y, x) => {
        opponent.receivePlayerAttack(y, x);
    }

    const showBoards = () => {
        return [human.playerBoard.board, computer.playerBoard.board];
    }

    return {currentPlayer, opponent, playRound, showBoards}
}

export {GameController}
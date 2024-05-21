import { Player } from "./playerFactory";

function GameController() {
    let human = Player('Player 1');
    let computer = Player('Player 2');

    let players = [human, computer];

    let currentPlayer = players[0];
    let opponent = players[1];
    
    const playRound = (y, x) => {
        opponent.receivePlayerAttack(y, x);
    }

    return {currentPlayer, opponent, playRound}
}

export {GameController}
import { Gameboard } from "./gameboardFactory"
// A player needs to keep track of their board, be able to place ships and attack a board
function Player(playerName) {
    let playerBoard = Gameboard();

    const placePlayerShip = (ship, y, x, layout) => {
        playerBoard.placeShip(ship, y, x, layout);
    }

    const receivePlayerAttack = (y, x) => {
        playerBoard.receiveAttack(y, x);
    }

    const attackEnemyBoard = (opponent, y, x) => {
        opponent.playerBoard.receiveAttack(y, x);
    }
    
    return { get playerName() {
        return playerName;
    }, playerBoard, placePlayerShip, receivePlayerAttack, attackEnemyBoard }
}

export { Player }
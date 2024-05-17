import { Gameboard } from "./gameboardFactory"

function Player(type) {
    let playerBoard;
    let computerBoard;
    if (type === 'player') {
        playerBoard = Gameboard();
    } else if (type === 'computer') {
        computerBoard = Gameboard();
    } else {
        throw ('Wrong input given');
    }

    const playerPlaceShip = (y, x) => {
        playerBoard.placeShip(y,x);
    }
    
    return {playerBoard, computerBoard, playerPlaceShip}
}

export { Player }
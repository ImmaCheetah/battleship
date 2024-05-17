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

    const playerPlaceShip = (ship, y, x, layout) => {
        
        playerBoard.placeShip(ship, y, x, layout);
    }
    
    return {playerBoard, computerBoard, playerPlaceShip}
}

export { Player }
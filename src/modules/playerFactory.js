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
    
    return {playerBoard, computerBoard}
}

export { Player }
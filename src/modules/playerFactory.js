import { Gameboard } from "./gameboardFactory"
// A player needs to keep track of their board, be able to place ships and attack a board
function Player() {
    let playerBoard = Gameboard();

    const placePlayerShip = (ship, y, x, layout) => {
        
        playerBoard.placeShip(ship, y, x, layout);
    }
    
    return { playerBoard, placePlayerShip }
}

export { Player }
function Gameboard() {
    let board = [];
    
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = [];
      }
    }

    const placeShip = (ship, y, x) => {
        let startCoord = board[x][y];
        
        for (let i = 0; i < ship.length; i++) {
            board[x][y] = ship;
            y += 1;
        }
        // board[1][1] = 1;
        // board[1][2] = 1;
        // board[1][3] = 1;

        return board;
        
    }
    
    return {board, placeShip}
}

export {Gameboard}
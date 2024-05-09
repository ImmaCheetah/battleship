function Gameboard() {
    let board = [];
    
    // Create 10x10 array
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = [];
      }
    }

    const placeShip = (ship, y, x, layout) => {

        checkOutOfBounds(ship, y, x);
        
        for (let i = 0; i < ship.length; i++) {
            // If there is layout it will be horizontal else it will be vertical
            if (layout) {
                board[y][x] = ship;
                x += 1;
                
            } else {
                board[y][x] = ship;
                y += 1;
            }
        }

        return board;
        
    }

    const checkOutOfBounds = (ship, y, x) => {
        let shipLength = ship.length;

        let maxY = y + shipLength;
        let maxX = x + shipLength;

        if (y < 0 || x < 0 || maxY > 9 || maxX > 9) {
            throw ('Ship is out of bounds');
        } else {
            return true;
        }
    }
    
    return {board, placeShip}
}

export {Gameboard}

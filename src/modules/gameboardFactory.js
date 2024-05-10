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
        checkOverlap(ship, y, x, layout);
        checkOutOfBounds(ship, y, x);

        let cellObject = {
            shipObj: ship,
            shipName: ship.name,
            beenHit: false
        }
        
        for (let i = 0; i < ship.length; i++) {
            // If there is layout it will be horizontal else it will be vertical
            if (layout) {
                board[y][x] = cellObject;
                x += 1;
            } else {
                board[y][x] = cellObject;
                y += 1;
            }
        }
        return board;  
    }

    const receiveAttack = (y, x) => {
        let targetCell = board[y][x];

        if (targetCell.length != 0) {
            targetCell.shipObj.hit();
            targetCell.beenHit = true;
            return true;
        } else {
            return false;
        }


        // look at x and y in the array
        // check if there is a ship
        // call hit() function on ship at x and y
        //   - increase hits by 1
        // if there is no ship then record missed coordinates
        
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

    const checkOverlap = (ship, y, x, layout) => {

        if (board[y][x].length != 0) {
            throw ('A ship exists in that location');
        }

        for (let i = 0; i < ship.length; i++) {
            if (board[y][x].length != 0) {
                throw ('A ship exists in that location');
            }
            if (layout) {
                x += 1;
            } else {
                y += 1;
            }
        }
    }
    
    return {board, placeShip, receiveAttack}
}

export {Gameboard}

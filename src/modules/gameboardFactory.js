function Gameboard() {
    let board = [];
    let placedShips = [];
    let missedHits = [];
    // Create 10x10 array
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = 
        {
            ship: null,
            beenHit: false,
            missedHit: false
        };
      }
    }

    const placeShip = (ship, y, x, layout) => {
        checkOutOfBounds(ship, y, x);
        checkOverlap(ship, y, x, layout);
        
        placedShips.push(ship);

        for (let i = 0; i < ship.length; i++) {
            // If there is layout it will be horizontal else it will be vertical
            if (layout) {
                board[y][x].ship = ship;
                x += 1;
            } else {
                board[y][x].ship = ship;
                y += 1;
            }
        }
        return board;  
    }

    const receiveAttack = (y, x) => {
        let targetCell = board[y][x];
        
        if (targetCell.beenHit === true || targetCell.missedHit === true) {
            throw ('Been hit already');
        }

        if (targetCell.ship != null) {
            targetCell.ship.hit();
            targetCell.beenHit = true;
        } else {
            board[y][x].missedHit = true;
            missedHits.push([y,x])
        }
    }

    const allShipsSunk = () => {
        let counter = 0;
        placedShips.forEach((object) => {
            if (object.isSunk()) {
                counter += 1;
            }
        })

        if (counter === placedShips.length) {
            return true;
        } else {
            return false;
        }

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

        if (board[y][x].ship != null) {
            throw ('A ship exists in that location');
        }

        for (let i = 0; i < ship.length; i++) {
            if (board[y][x].ship != null) {
                throw ('A ship exists in that location');
            }
            if (layout) {
                x += 1;
            } else {
                y += 1;
            }
        }
    }
    
    return {
        get board() {
            return board;
        }, 
        placeShip, 
        receiveAttack, 
        allShipsSunk, 
        get missedHits() {
            return missedHits;
        }
    }
}

export {Gameboard}

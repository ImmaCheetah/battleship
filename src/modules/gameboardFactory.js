function Gameboard() {
    let board = [];
    let placedShips = [];
    let missedHits = [];
    // Create 10x10 array
    const generateBoard = () => {
        placedShips = [];
        missedHits = [];
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
    }

    const placeShip = (ship, y, x, layout) => {
        isOutOfBounds(ship, y, x);
        hasOverlap(ship, y, x, layout);
        
        placedShips.push(ship);

        for (let i = 0; i < ship.shipLength; i++) {
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

    const placeShipRandomly = (ship) => {
        let randomX = randomNum();
        let randomY = randomNum();
        let randomBoolVal = randomBool();

        if (isOutOfBounds(ship, randomY, randomX) || hasOverlap(ship, randomY, randomX, randomBoolVal)) {
            placeShipRandomly(ship);
        } else {
            placeShip(ship, randomY, randomX, randomBoolVal);
        }
    }

    const  randomNum = () => {
        return Math.floor(Math.random() * (9 - 0 + 1) + 0);
    }

    const randomBool = () => Math.random() >= 0.5;

    const receiveAttack = (y, x) => {
        let targetCell = board[y][x];
        
        
        if (targetCell.beenHit === true || targetCell.missedHit === true) {
            throw ('Been hit already');
            // console.log('been hit already');
            // return;
        }

        if (targetCell.ship != null) {
            targetCell.ship.hit();
            targetCell.beenHit = true;
            console.log(`Ship at ${y}, ${x} is sunk check`, targetCell.ship.isSunk())
        } else {
            board[y][x].missedHit = true;
            missedHits.push([y,x])
            // console.log('is sunk', targetCell.ship)
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

    const isOutOfBounds = (ship, y, x) => {
        let shipLength = ship.shipLength;

        let maxY = y + shipLength;
        let maxX = x + shipLength;

        if (y < 0 || x < 0 || maxY > 9 || maxX > 9) {
            return true;
        } else {
            return false;
        }
    }

    const hasOverlap = (shipObj, y, x, layout) => {
        if (board[y][x].ship != null) {
            return true;
        }

        for (let i = 0; i < shipObj.shipLength; i++) {
            if (board[y][x].ship != null) {
                return true;
            }
            if (layout) {
                x += 1;
            } else {
                y += 1;
            }
        }
    }

    const isBoardEmpty = () => {
        if (placedShips.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    generateBoard();
    
    return {
        get board() {
            return board;
        }, 
        placeShip,
        placeShipRandomly, 
        receiveAttack,
        hasOverlap, 
        allShipsSunk, 
        isBoardEmpty,
        generateBoard,
        get missedHits() {
            return missedHits;
        },
        get placedShips() {
            return placedShips;
        }
    }
}

export {Gameboard}

function Gameboard() {
  let board = [];
  let placedShips = [];
  let missedHits = [];
  // Create 10x10 array with object in each index
  const generateBoard = () => {
    placedShips = [];
    missedHits = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = {
          ship: null,
          beenHit: false,
          missedHit: false,
        };
      }
    }
  };

  const placeShip = (ship, y, x, layout) => {
    isOutOfBounds(ship, y, x);
    hasOverlap(ship, y, x, layout);

    placedShips.push(ship);

    for (let i = 0; i < ship.shipLength; i++) {
      // If there is layout, it will be horizontal else it will be vertical
      if (layout) {
        board[y][x].ship = ship;
        x += 1;
      } else {
        board[y][x].ship = ship;
        y += 1;
      }
    }
    return board;
  };

  // Checks if ship will be out of bounds or overlap and calls function again to generate new coordinates
  const placeShipRandomly = (ship) => {
    let randomX = randomNum();
    let randomY = randomNum();
    let randomBoolVal = randomBool();

    if (
      isOutOfBounds(ship, randomY, randomX) ||
      hasOverlap(ship, randomY, randomX, randomBoolVal)
    ) {
      placeShipRandomly(ship);
    } else {
      placeShip(ship, randomY, randomX, randomBoolVal);
    }
  };

  const randomNum = () => {
    return Math.floor(Math.random() * (9 - 0 + 1) + 0);
  };

  const randomBool = () => Math.random() >= 0.5;

  const receiveAttack = (y, x) => {
    let targetCell = board[y][x];

    if (isAlreadyHit(board, y, x)) {
      throw "Been hit already";
    }

    if (targetCell.ship != null) {
      targetCell.ship.hit();
      targetCell.beenHit = true;
    } else {
      board[y][x].missedHit = true;
      missedHits.push([y, x]);
    }
  };

  const isAlreadyHit = (board, y, x) => {
    if (board[y][x].beenHit === true || board[y][x].missedHit === true) {
      return true;
    }
  };

  const allShipsSunk = () => {
    let counter = 0;
    placedShips.forEach((object) => {
      if (object.isSunk()) {
        counter += 1;
      }
    });

    if (counter === placedShips.length) {
      return true;
    } else {
      return false;
    }
  };

  const isOutOfBounds = (ship, y, x) => {
    let shipLength = ship.shipLength;

    let maxY = y + shipLength;
    let maxX = x + shipLength;

    if (y < 0 || x < 0 || maxY > 9 || maxX > 9) {
      return true;
    } else {
      return false;
    }
  };

  // Loop through length of ship and check board if there is a ship at that coordinate
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
  };

  const isBoardEmpty = () => {
    if (placedShips.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  generateBoard();

  return {
    placeShip,
    placeShipRandomly,
    receiveAttack,
    hasOverlap,
    allShipsSunk,
    isBoardEmpty,
    generateBoard,
    isAlreadyHit,
    get board() {
      return board;
    },
    get missedHits() {
      return missedHits;
    },
    get placedShips() {
      return placedShips;
    },
  };
}

export { Gameboard };

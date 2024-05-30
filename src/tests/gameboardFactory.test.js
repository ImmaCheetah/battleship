import { Gameboard } from "../modules/gameboardFactory";
import { Ship } from "../modules/shipFactory";

test('Gameboard exists', () => {
    expect(Gameboard).toBeDefined();
})

test('Has correct object in array', () => {
    let testObject = 
        {
            ship: null,
            beenHit: false,
            missedHit: false
        }
    
    expect(Gameboard().board[2][5]).toEqual(testObject) 
    expect(Gameboard().board[0][0]).toEqual(testObject) 
    expect(Gameboard().board[6][9]).toEqual(testObject)
    expect(Gameboard().board[9][9]).toEqual(testObject) 
})

test('Able to place ship on board horizontally', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3)
    
    testBoard.placeShip(testShip, 1, 1, true)
    expect(testBoard.board[1][1].ship).toEqual(testShip);
    expect(testBoard.board[1][2].ship).toEqual(testShip);
    expect(testBoard.board[1][3].ship).toEqual(testShip);
})

test('Able to place ship on board vertically', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3)
    
    testBoard.placeShip(testShip, 1, 1, false)
    expect(testBoard.board[1][1].ship).toEqual(testShip);
    expect(testBoard.board[2][1].ship).toEqual(testShip);
    expect(testBoard.board[3][1].ship).toEqual(testShip);
})

test.skip('Throws error if ship is placed out of bounds', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    expect(() => testBoard.placeShip(testShip, 0, 7, true)).toThrow('Ship is out of bounds');
    expect(() => testBoard.placeShip(testShip, -1, 0, false)).toThrow('Ship is out of bounds');
    expect(() => testBoard.placeShip(testShip, 8, 8, false)).toThrow('Ship is out of bounds');
})

test('Returns true if ship is being placed on another ship', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    testBoard.placeShip(testShip, 2, 2, true);

    testBoard.placeShip(testShip, 2, 0, true);

    expect(testBoard.hasOverlap(testShip, 2, 0, true)).toBe(true)
    expect(testBoard.hasOverlap(testShip, 0, 2, false)).toBe(true)
})

test('Attack returns true when ship is hit and correct hit amount', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    testBoard.placeShip(testShip, 1, 1, true)
    testBoard.receiveAttack(1,1)
    expect(testShip.hits).toEqual(1);
    expect(testBoard.board[1][1].beenHit).toEqual(true);
})

test('Able to hit all parts of ship', () => {
    let testBoard = Gameboard();
    let testShip = Ship(4);
    testBoard.placeShip(testShip, 1, 1, true)
    testBoard.receiveAttack(1,1)
    testBoard.receiveAttack(1,2)
    testBoard.receiveAttack(1,3)
    testBoard.receiveAttack(1,4)
    expect(testBoard.board[1][1].beenHit).toEqual(true);
    expect(testBoard.board[1][2].beenHit).toEqual(true);
    expect(testBoard.board[1][3].beenHit).toEqual(true);
    expect(testBoard.board[1][4].beenHit).toEqual(true);
    expect(testShip.hits).toEqual(4);
})

test('Records missed hit', () => {
    let testBoard = Gameboard();
    
    testBoard.receiveAttack(1,1)
    testBoard.receiveAttack(2,5)
    testBoard.receiveAttack(7,3)

    expect(testBoard.board[1][1].missedHit).toEqual(true);
    expect(testBoard.board[2][5].missedHit).toEqual(true);
    expect(testBoard.board[7][3].missedHit).toEqual(true);

    expect(testBoard.missedHits[0]).toEqual([1,1])
    expect(testBoard.missedHits[1]).toEqual([2,5])
    expect(testBoard.missedHits[2]).toEqual([7,3])
})

test('Throws error if trying to attack an already hit spot', () => {
    let testBoard = Gameboard();
    let testShip = Ship(4);
    testBoard.placeShip(testShip, 2, 2, true)
    testBoard.receiveAttack(2,2)
    testBoard.receiveAttack(5,5)

    expect(() => testBoard.receiveAttack(2,2)).toThrow('Been hit already');
    expect(() => testBoard.receiveAttack(5,5)).toThrow('Been hit already');
})

test('Returns true if ship is sunk', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    testBoard.placeShip(testShip, 2, 2, true)

    testBoard.receiveAttack(2,2)
    testBoard.receiveAttack(2,3)
    testBoard.receiveAttack(2,4)

    expect(testShip.isSunk()).toEqual(true);
})

test('Returns a message when all ships are sunk', () => {
    let testBoard = Gameboard();
    let ship1 = Ship(2);
    let ship2 = Ship(3);

    testBoard.placeShip(ship1, 1, 1, true);
    testBoard.placeShip(ship2, 5, 3, false);

    testBoard.receiveAttack(1, 1);
    testBoard.receiveAttack(1, 2);

    testBoard.receiveAttack(5, 3);
    testBoard.receiveAttack(6, 3);
    testBoard.receiveAttack(7, 3);

    expect(testBoard.allShipsSunk()).toEqual(true);
})

test('Randomly places ships without overlap', () => {
    let testBoard = Gameboard();
    let ship1 = Ship(5);
    let ship2 = Ship(3);

    testBoard.placeShipRandomly(ship1);
    expect(testBoard.placedShips.length).toBe(1);

    testBoard.placeShipRandomly(ship2);
    expect(testBoard.placedShips.length).toBe(2);
})
import { Gameboard } from "../modules/gameboardFactory";
import { Ship } from "../modules/shipFactory";

test('Gameboard exists', () => {
    expect(Gameboard).toBeDefined();
})

test('Generates a 10x10 array', () => {
    let testBoard = [
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []]]
    expect(Gameboard().board).toEqual(testBoard) 
})

test('Able to place ship on board horizontally', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3)
    let cellObject = {
        shipObj: testShip,
        shipName: testShip.name,
        beenHit: false  
    }
    testBoard.placeShip(testShip, 1, 1, true)
    let expected = [
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [1], [1], [1], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []], 
    [[], [], [], [], [], [], [], [], [], []]
    ]
    expect(testBoard.board[1][1]).toEqual(cellObject);
    expect(testBoard.board[1][2]).toEqual(cellObject);
    expect(testBoard.board[1][3]).toEqual(cellObject);
})

test('Able to place ship on board vertically', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    let cellObject = {
        shipObj: testShip,
        shipName: testShip.name,
        beenHit: false  
    }
    testBoard.placeShip(testShip, 1, 1, false)
    expect(testBoard.board[1][1]).toEqual(cellObject);
    expect(testBoard.board[2][1]).toEqual(cellObject);
    expect(testBoard.board[3][1]).toEqual(cellObject);
})

test('Throws error if ship is placed out of bounds', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    expect(() => testBoard.placeShip(testShip, 0, 7, true)).toThrow('Ship is out of bounds');
})

test('Throws error if ship is being placed on another ship', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    testBoard.placeShip(testShip, 2, 2, true);
    expect(() => testBoard.placeShip(testShip, 2, 0, true)).toThrow('A ship exists in that location')
    expect(() => testBoard.placeShip(testShip, 0, 2, false)).toThrow('A ship exists in that location')
    expect(() => testBoard.placeShip(testShip, 0, 4, false)).toThrow('A ship exists in that location')
})

test('Attack returns true when ship is hit and correct hit amount', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    testBoard.placeShip(testShip, 1, 1, true)
    expect(testBoard.receiveAttack(1,1)).toEqual(true);
    expect(testShip.hits).toEqual(1);
    expect(testBoard.board[1][1].beenHit).toEqual(true);
    expect(testBoard.receiveAttack(5,7)).toEqual(false);
})

test('Able to hit all parts of ship', () => {

})
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
    expect(testBoard.board[1][1]).toEqual(testShip);
    expect(testBoard.board[1][2]).toEqual(testShip);
    expect(testBoard.board[1][3]).toEqual(testShip);
})

test('Able to place ship on board vertically', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    testBoard.placeShip(testShip, 1, 1, false)
    expect(testBoard.board[1][1]).toEqual(testShip);
    expect(testBoard.board[2][1]).toEqual(testShip);
    expect(testBoard.board[3][1]).toEqual(testShip);
})

test('Throws error if ship is placed out of bounds', () => {
    let testBoard = Gameboard();
    let testShip = Ship(3);
    expect(() => testBoard.placeShip(testShip, 0, 7, true)).toThrow('Ship is out of bounds');
})
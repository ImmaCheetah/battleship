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
    testBoard.placeShip(testShip, 1, 1)
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
import { Gameboard } from "../modules/gameboardFactory";
import { Player } from "../modules/playerFactory";

test('Player factory exists', () => {
    expect(Player).toBeDefined();
})

test('Player returns correct board based on input', () => {
    let testPlayer = Player('player');
    let testComputer = Player('computer');
    let testBoard = JSON.stringify(Gameboard());
    expect(JSON.stringify(testPlayer.playerBoard)).toBe(testBoard);
    expect(JSON.stringify(testComputer.computerBoard)).toBe(testBoard);
})

test('Able to place ship using board', () => {
    let testPlayer = Player('player');
    expect(testPlayer.playerPlaceShip(3,3)).toEqual(testPlayer.playerBoard.placeShip(3,3))
})

test.skip('Throws an error if wrong input given', () => {
    let testPlayer = Player('kablam');
    expect(() => Player('kablam')).toThrow('Wrong input given');
})

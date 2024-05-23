import { Gameboard } from "../modules/gameboardFactory";
import { Player } from "../modules/playerFactory";
import { Computer } from "../modules/playerFactory";
import { Ship } from "../modules/shipFactory";

test('Player factory exists', () => {
    expect(Player).toBeDefined();
})

test('Player has its own board', () => {
    let testPlayer = Player();
    expect(testPlayer.playerBoard.placeShip).toBeDefined();
    expect(testPlayer.playerBoard.receiveAttack).toBeDefined();
})

test('Returns correct name', () => {
    expect(Player('Jerry').playerName).toEqual('Jerry');
})

test('Able to place a ship using player', () => {
    let testPlayer = Player();
    let testShip = Ship(3);
    testPlayer.placePlayerShip(testShip, 1, 1, true);
    expect(testPlayer.playerBoard.board[1][1].ship).toEqual(testShip);
    expect(testPlayer.playerBoard.board[1][2].ship).toEqual(testShip);
    expect(testPlayer.playerBoard.board[1][3].ship).toEqual(testShip);
})

test('Player receives attack on its board',() => {
    let testPlayer = Player();
    let testShip = Ship(3);
    testPlayer.placePlayerShip(testShip, 1, 1, true);
    testPlayer.receivePlayerAttack(1, 1);
    expect(testPlayer.playerBoard.board[1][1].beenHit).toEqual(true);
})

test('Player can attack enemy board', () => {
    let human = Player();
    let computer = Player();
    let testShip = Ship(3);
    let sub = Ship(3);
    human.placePlayerShip(testShip, 1, 1, true);
    computer.placePlayerShip(sub, 2, 2, true);
    
    human.attackEnemyBoard(computer, 2, 2);
    expect(computer.playerBoard.board[2][2].beenHit).toEqual(true);
})

test('Computer factory exists with unique method', () => {
    let testComputer = Computer();
    expect(testComputer.computerAttack).toBeDefined();
})

test('Computer returns correct name', () => {
    expect(Computer('Jerry').computerName).toEqual('Jerry');
})

test('Computer is able to attack board at random coordinate', () => {
    let testComputer = Computer('Robo');
    let testHuman = Player('Tom');

    testComputer.computerAttack(testHuman);
    testComputer.computerAttack(testHuman);
    testComputer.computerAttack(testHuman);
    expect(testHuman.playerBoard.missedHits.length).toBe(3);
})



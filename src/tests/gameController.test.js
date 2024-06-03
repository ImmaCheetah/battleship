import { GameController } from "../modules/gameController";
import { Gameboard } from "../modules/gameboardFactory";

test('Game controller module exists', () => {
    expect(GameController).toBeDefined();
})

test('Returns the first player when initialized', () => {
    let game = GameController('Player 1');

    expect(game.getCurrentPlayer().playerName).toBe('Player 1');
})

test.skip('Returns the board of each player when called', () => {
    let testGame = GameController();

    expect(testGame.getHumanBoard()).toEqual(Gameboard().board)
    expect(testGame.getComputerBoard()).toEqual(Gameboard().board)
})

test('Able to switch current player', () => {
    let testGame = GameController('Dave');

    expect(testGame.getCurrentPlayer().playerName).toEqual('Dave');

    testGame.switchPlayerTurn();

    expect(testGame.getCurrentPlayer().playerName).toEqual('Lil CPU');
})

// test each aspect of play round
describe('Play round function', () => {
    let game = GameController('Dave');
    game.placeShipsRandomly();
    test('Places predetermined ships', () => {
        expect(game.getCurrentPlayer().playerBoard.placedShips.length).toBeGreaterThan(1);
        expect(game.getOpponent().playerBoard.placedShips.length).toBeGreaterThan(1);
    })

    test('Attacks the right player when called', () => {
        game.playRound(1, 1);
        expect(game.getComputerBoard()[1][1].missedHit).toBe(true);
        game.playRound();
        expect(game.getHumanObject().playerBoard.missedHits.length).toBe(1);
        game.playRound(1, 2);
        expect(game.getComputerBoard()[1][2].missedHit).toBe(true);
        game.playRound(1, 2);
        expect(game.getHumanObject().playerBoard.missedHits.length).toBe(2);
    })
    
    test('Determines correct winner', () => {
        game.playRound(0, 0);
        game.playRound(); 
        game.playRound(0, 1);
        game.playRound();
        game.playRound(0, 2);
        expect(game.getComputerBoard()[0][0].ship.isSunk()).toBe(true);
        game.playRound();
        game.playRound(1, 3);
        game.playRound();
        game.playRound(1, 4);
        expect(game.getComputerBoard()[1][4].ship.isSunk()).toBe(true);
        expect(game.getCurrentPlayer().playerBoard.allShipsSunk()).toBe(true);
        expect(game.checkForWinner()).toBe('Dave is the winner!');
    })
})

test('Able to change name of player', () => {
    let game = GameController('Dave');

    game.getHumanObject().updateName('Bongo');
    expect(game.getHumanObject().playerName).toBe('Bongo');
})




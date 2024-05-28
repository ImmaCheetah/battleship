import { GameController } from "../modules/gameController";
import { Gameboard } from "../modules/gameboardFactory";
import { Player } from "../modules/playerFactory";
import { Ship } from "../modules/shipFactory";

test('Game controller module exists', () => {
    expect(GameController).toBeDefined();
})

test('Returns the first player when initialized', () => {
    let game = GameController('Player 1');

    expect(game.getCurrentPlayer().playerName).toBe('Player 1');
})

test('Returns the board of each player when called', () => {
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
    test('Places predetermined ships', () => {
        expect(game.getCurrentPlayer().playerBoard.placedShips.length).toBeGreaterThan(2);
        expect(game.getOpponent().playerBoard.placedShips.length).toBeGreaterThan(2);
    })

    test('Attacks the right player when called', () => {
        game.playRound(1, 1);
        expect(game.getComputerBoard()[1][1].missedHit).toBe(true);
        game.playRound();
        expect(game.getOpponent().playerBoard.missedHits.length).toBe(1);
        game.playRound(1, 2);
        expect(game.getComputerBoard()[1][2].missedHit).toBe(true);
        game.playRound(1, 2);
        expect(game.getOpponent().playerBoard.missedHits.length).toBe(2);
    })
    
    
})



// Current player is chosen off the start, will be human
// Both boards are printed
// Current player gets to attack enemy board
// Check if all ships are sunk
//  - if they are, declare winner
//  - if not, continue
// Switch player to computer
// Computer will attack random coordinate on its own

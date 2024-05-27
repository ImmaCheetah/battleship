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

test.skip('Displays round info', () => {
    let testGame = GameController('bobby');

    expect(testGame.printRoundInfo()).toBe(1);
})
// test each aspect of play round
describe('Play round function', () => {
    test.only('Attacks the right player when called', () => {
        let game = GameController();
        
        game.playRound(1, 1);
        expect(game.getComputerBoard()[1][1].missedHit).toBe(true);

        game.playRound(1, 1);
        expect(game.getHumanBoard()[1][1].missedHit).toBe(true);
    }) 

    test('Switches player after turn is finished', () => {
        let game = GameController('Dave');

        expect(game.getCurrentPlayer().playerName).toEqual('Dave');

        game.playRound();

        expect(game.getCurrentPlayer().playerName).toEqual('Lil CPU');
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

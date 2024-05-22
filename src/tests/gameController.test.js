import { GameController } from "../modules/gameController";
import { Ship } from "../modules/shipFactory";

test('Game controller module exists', () => {
    expect(GameController).toBeDefined();
})

test('Returns the first player when initialized', () => {
    let game = GameController();

    expect(game.currentPlayer.playerName).toBe('Player 1');
})
// test each aspect of play round
describe('Play round function', () => {
    test('Able to receive attack', () => {
        let game = GameController();
        let testShip = Ship(3);
        game.opponent.placePlayerShip(testShip, 1, 1);
        game.playRound(1, 1);
        game.playRound(5, 5);
        expect(game.opponent.playerBoard.board[1][1].beenHit).toBe(true);
        expect(game.opponent.playerBoard.board[5][5].missedHit).toBe(true);
    })

    test('Switches player after turn is finished', () => {

    })
})


// Current player is chosen, will be human
// Current player gets to attack enemy board
// Check if all ships are sunk
//  - if they are, declare winner
//  - if not, continue
// Switch player to computer
// Computer will attack random coordinate on its own

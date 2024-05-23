import { GameController } from "../modules/gameController";
import { Gameboard } from "../modules/gameboardFactory";
import { Ship } from "../modules/shipFactory";

test('Game controller module exists', () => {
    expect(GameController).toBeDefined();
})

test('Returns the first player when initialized', () => {
    let game = GameController('Player 1');

    expect(game.currentPlayer.playerName).toBe('Player 1');
})
// test each aspect of play round
describe('Play round function', () => {
    test.only('Able to show both boards', () => {
        let testGame = GameController('dave', 'robo');

        let displayBoards = testGame.showBoards();
        expect(displayBoards[0]).toEqual(Gameboard().board);
        expect(displayBoards[1]).toEqual(Gameboard().board);
    })

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


// Current player is chosen off the start, will be human
// Both boards are printed
// Current player gets to attack enemy board
// Check if all ships are sunk
//  - if they are, declare winner
//  - if not, continue
// Switch player to computer
// Computer will attack random coordinate on its own

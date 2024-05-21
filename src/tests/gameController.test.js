import { GameController } from "../modules/gameController";
import { Ship } from "../modules/shipFactory";

test('Game controller module exists', () => {
    expect(GameController).toBeDefined();
})

test('Returns the first player when initialized', () => {
    let game = GameController();

    expect(game.currentPlayer.playerName).toBe('Player 1');
})

test('Able to play a round using game controller', () => {
    let game = GameController();
    let testShip = Ship(3);
    game.opponent.placePlayerShip(testShip, 1, 1);
    game.playRound(1, 1);

    expect(game.opponent.playerBoard.board[1][1].beenHit).toBe(true);

})
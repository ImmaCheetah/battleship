import "./style.css";
import setupGame from "./modules/gameSetup";
import playGame from "./modules/gameRound";
import { GameController } from "./modules/gameController";

// import { GameController } from "./modules/gameController";
// import { Ship } from "./modules/shipFactory";
// import { Player } from "./modules/playerFactory";
// import { Gameboard } from "./modules/gameboardFactory";

// let game = GameController('dab', 'robo');
setupGame();
let game = GameController('Dave');
game.playRound(0, 0);
game.playRound(0, 1);
game.playRound(1, 1);
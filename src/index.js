import "./style.css";
import setupGame from "./modules/gameSetup";
import playGame from "./modules/gameRound";
import { Player, Computer } from "./modules/playerFactory";
import { GameController } from "./modules/gameController";
import ScreenController from "./modules/screenController";

// setupGame();
// let game = GameController('Dave');
// game.playRound(0, 0);
// game.playRound(); 
// game.playRound(0, 1);
// game.playRound();
// game.playRound(0, 2);
// game.playRound();
// game.playRound(1, 3);
// game.playRound();
// game.playRound(1, 4);
ScreenController();
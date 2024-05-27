import "./style.css";
import setupGame from "./modules/gameSetup";
import playGame from "./modules/gameRound";
import { Player, Computer } from "./modules/playerFactory";
import { GameController } from "./modules/gameController";

setupGame();
let game = GameController('Dave');
game.playRound(0, 0);
game.playRound();


import { Gameboard } from "./gameboardFactory"
// A player needs to keep track of their board, be able to place ships and attack a board
function Player(playerName) {
    let playerBoard = Gameboard();

    const placePlayerShip = (ship, y, x, layout) => {
        playerBoard.placeShip(ship, y, x, layout);
    }

    const receivePlayerAttack = (y, x) => {
        playerBoard.receiveAttack(y, x);
    }

    const attackEnemyBoard = (opponent, y, x) => {
        opponent.playerBoard.receiveAttack(y, x);
    }
    
    return { 
        get playerName() {
            return playerName;
        }, 
        playerBoard, 
        placePlayerShip, 
        receivePlayerAttack, 
        attackEnemyBoard 
    }
}

function Computer(playerName = 'Lil CPU') {
    const computer = Player();
    const {playerBoard, placePlayerShip, receivePlayerAttack} = computer;

    // Randomly choose one spot
    // Use that to attack the player
    // Find index of that attack then delete from array
    const computerAttack = (player) => {
        let singleAttack = allAttacks[Math.floor(Math.random() * allAttacks.length)]

        player.receivePlayerAttack(singleAttack[0], singleAttack[1]);

        let attackIndex = returnIndexOfCoord(allAttacks, singleAttack)
        allAttacks.splice(attackIndex, 1);
        
    }
    // Return the index of the attack from the array that holds all attacks
    const returnIndexOfCoord = (array, value) => {
        let index = 0;

        array.every((element) => {
            if (element[0] === value[0] && element[1] === value[1]) {
                return false;
            } else {
                index += 1;
                return true;
            }
        })

        return index;
    }
    // Create all possible attacks in an array
    const createArrayWithAllAttacks = () => {
        let possibleAttacks = [];
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                possibleAttacks.push([x, y]);
            }
        }
        return possibleAttacks;
    }

    // Create array of attacks
    let allAttacks = createArrayWithAllAttacks();

    return {
        get playerName() {
            return playerName;
        },
        playerBoard,
        placePlayerShip, 
        receivePlayerAttack, 
        computerAttack
    }
}

export { Player, Computer }
import { Gameboard } from "./gameboardFactory"

function Player(playerName) {
    let playerBoard = Gameboard();

    const placePlayerShip = (ship, y, x, layout) => {
        playerBoard.placeShip(ship, y, x, layout);
    }

    const placePlayerShipRandomly = (ship) => {
        playerBoard.placeShipRandomly(ship);
    }

    const receivePlayerAttack = (y, x) => {
        playerBoard.receiveAttack(y, x);
    }

    const attackEnemyBoard = (opponent, y, x) => {
        opponent.playerBoard.receiveAttack(y, x);
    }

    const updateName = (newName) => {
        playerName = newName;
        return newName;
    }
    
    return { 
        get playerName() {
            return playerName;
        },
        updateName, 
        playerBoard, 
        placePlayerShip,
        placePlayerShipRandomly, 
        receivePlayerAttack, 
        attackEnemyBoard 
    }
}

function Computer(playerName = 'Lil CPU') {
    const computer = Player(playerName);
    const {playerBoard, placePlayerShip, placePlayerShipRandomly, receivePlayerAttack} = computer;

    // Randomly choose one spot
    // Use that to attack the player
    // Find index of that attack then delete from array
    const computerAttack = (player) => {
        let singleAttack = allAttacks[Math.floor(Math.random() * allAttacks.length)]
        console.log(allAttacks);
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

    const refillAttackArray = () => {
        allAttacks = createArrayWithAllAttacks();
    }

    // Create array of attacks
    let allAttacks = createArrayWithAllAttacks();

    return {
        get playerName() {
            return playerName;
        },
        playerBoard,
        placePlayerShip, 
        placePlayerShipRandomly,
        receivePlayerAttack, 
        computerAttack,
        refillAttackArray
    }
}

export { Player, Computer }
function Ship(shipLength, hits = 0) {
    if (!shipLength) throw ('Missing argument for ship');

    const hit = () => {
        hits += 1;
    }
    
    const isSunk = () => {
        if (shipLength === hits) {
            return true;
        }
        return false
    }
    
    const assignName = () => {
        if (shipLength === 2) {
            return 'Cruiser';
        } else if (shipLength === 3) {
            return 'Submarine'
        } else if (shipLength === 4) {
            return 'Battleship';
        } else if (shipLength === 5) {
            return 'Carrier';
        }
    }
    let name = assignName();

    return {
        get name() {
            return name;
        }, 
        get shipLength() {
            return shipLength;
        }, 
        get hits() {
            return hits;
        },
        hit, 
        isSunk 
    }
}

export {Ship}
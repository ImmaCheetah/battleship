function Ship(length, hits = 0) {
    if (!length) throw ('Missing argument for ship');

    const hit = () => {
        hits += 1;
    }
    
    const isSunk = () => {
        if (length === hits) {
            return true;
        }
        return false
    }
    
    const assignName = () => {
        if (length === 2) {
            return 'Cruiser';
        } else if (length === 3) {
            return 'Submarine'
        } else if (length === 4) {
            return 'Battleship';
        } else if (length === 5) {
            return 'Carrier';
        }
    }
    let name = assignName();

    return {
        get name() {
            return name;
        }, 
        get length() {
            return length;
        }, 
        get hits() {
            return hits;
        },
        hit, 
        isSunk 
    }
}

export {Ship}
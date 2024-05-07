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

    return { 
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
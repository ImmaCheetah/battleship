function Ship(length, hits = 0) {
    if (!length) throw ('Missing argument for ship');

    const hit = () => {
        hits += 1;
    }

    return { length, 
        hit, 
        get hits() {
            return hits;
        }, 
    }
}

export {Ship}
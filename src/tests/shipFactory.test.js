import { Ship } from "../modules/shipFactory";

test('Ship factory exists', () => {
    expect(Ship).toBeDefined();
}) 

test('Throws error if missing an argument', () => {
    expect(() => Ship()).toThrow('Missing argument for ship');
})

test('Returns the length of ship', () => {
    expect(Ship(4).shipLength).toEqual(4);
})

test('Returns correct name based on ship length', () => {
    expect(Ship(4).name).toEqual('Battleship');
    expect(Ship(2).name).toEqual('Cruiser');
    expect(Ship(3).name).toEqual('Submarine');
    expect(Ship(5).name).toEqual('Carrier');
})

test('Hits parameter defaults as 0', () => {
    let testShip = Ship(4);
    expect(testShip.hits).toEqual(0);
}) 

test('Hit function exists', () => {
    let testShip = Ship(2);
    expect(testShip.hit).toBeDefined();
})

test('Hit function adds 1 to hits when called', () => {
    let testShip = Ship(2);
    testShip.hit()
    expect(testShip.hits).toEqual(1);
})

test('isSunk function exists', () => {
    expect(Ship(4).isSunk).toBeDefined();
})

test('isSunk returns true when ship is sunk', () => {
    let testShip = Ship(3);
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toEqual(true)
})
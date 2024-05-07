import { Ship } from "../modules/shipFactory";

test('Ship factory exists', () => {
    expect(Ship).toBeDefined();
}) 

test('Throws error if missing an argument', () => {
    expect(() => Ship()).toThrow('Missing argument for ship');
})

test('Returns the length of ship', () => {
    expect(Ship(4).length).toEqual(4);
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
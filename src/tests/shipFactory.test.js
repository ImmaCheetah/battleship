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


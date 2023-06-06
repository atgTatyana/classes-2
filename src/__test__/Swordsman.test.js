import Swordsman from '../Swordsman';

test('testing class Swordsman', () => {
  const swordsman = new Swordsman('SSS');
  expect(swordsman).toEqual({
    name: 'SSS', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

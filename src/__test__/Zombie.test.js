import Zombie from '../Zombie';

test('testing class Zombie', () => {
  const zombie = new Zombie('ZZZ');
  expect(zombie).toEqual({
    name: 'ZZZ', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

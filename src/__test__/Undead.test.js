import Undead from '../Undead';

test('testing class Undead', () => {
  const undead = new Undead('UUU');
  expect(undead).toEqual({
    name: 'UUU', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

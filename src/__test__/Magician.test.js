import Magician from '../Magician';

test('testing class Magician', () => {
  const magician = new Magician('MMM');
  expect(magician).toEqual({
    name: 'MMM', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

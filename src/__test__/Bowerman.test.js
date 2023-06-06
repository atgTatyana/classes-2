import Bowerman from '../Bowerman';

test('testing class Bowerman', () => {
  const bowman = new Bowerman('BBB');
  expect(bowman).toEqual({
    name: 'BBB', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

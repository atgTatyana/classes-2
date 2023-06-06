import Character from '../Character';

test('testing class Character for wrong name', () => {
  function error() {
    const character = new Character('C', 'Zombie');
  }
  expect(error).toThrowError('Длина имени должна быть от 2-х до 10 символов');
});

test('testing class Character for wrong type', () => {
  function error() {
    const character = new Character('VVV', 'Vampire');
  }
  expect(error).toThrowError('Разрешенные персонажи: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('testing levelUp function', () => {
  const character = new Character('ZZZ', 'Zombie');
  character.levelUp();
  expect(character).toEqual({
    name: 'ZZZ', type: 'Zombie', health: 100, level: 2, attack: 48, defence: 12,
  });
});

test.each([
  [50, 55],
  [200, 0],
])('testing damage function for damage = %i', (damage, expected) => {
  const character = new Character('ZZZ', 'Zombie');
  character.damage(damage);
  expect(character.health).toBe(expected);
});

test('testing levelUp function for health = 0', () => {
  const character = new Character('ZZZ', 'Zombie');
  character.health = 0;
  function level() {
    character.levelUp();
  }
  expect(level).toThrowError('Нельзя повысить уровень умершего!');
});

test('testing damage function for health = 0', () => {
  const character = new Character('ZZZ', 'Zombie');
  character.health = 0;
  function damage() {
    character.damage(20);
  }
  expect(damage).toThrowError('Нельзя нанести урон умершему!');
});

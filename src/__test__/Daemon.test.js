import Daemon from '../Daemon';

test('testing class Daemon', () => {
  const daemon = new Daemon('DDD');
  expect(daemon).toEqual({
    name: 'DDD', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});

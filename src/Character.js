export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2-х до 10 символов');
    }

    if (!types.includes(type)) {
      const typesString = types.join(', ');
      throw new Error(`Разрешенные персонажи: ${typesString}`);
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего!');
    }
    this.level += 1;
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Нельзя нанести урон умершему!');
    }
    this.health -= Math.round(points * (1 - this.defence / 100));
    this.health = (this.health < 0) ? 0 : this.health;
  }
}

export default class Character {
  constructor(name, type) {
    const nameLength = name.length;
    if (typeof name === 'string' && nameLength >= 2 && nameLength <= 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть от 2-х до 10 символов');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error('Разрешенные персонажи: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.type = type;

    this.health = 100;
    this.level = 1;

    switch (type) {
      case 'Bowman':
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      default:
        this.attack = 10;
        this.defence = 40;
        break;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= Math.round(points * (1 - this.defence / 100));
      this.health = (this.health < 0) ? 0 : this.health;
    } else {
      throw new Error('Нельзя нанести урон умершему!');
    }
  }
}

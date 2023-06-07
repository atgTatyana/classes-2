import Character from './Character';

export default class Bowerman extends Character {
  // type = 'Bowman'  -  для возможности ручного ввода типа персонажа
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

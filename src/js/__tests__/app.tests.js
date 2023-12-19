import Team from '../app';

class Character {
  constructor(name) {
    this.name = name;
  }
}

test('check create new team', () => {
  const team = new Team();
  const result = { members: new Set() };
  expect(team).toEqual(result);
});

test('check method add(character)', () => {
  const team = new Team();
  const nami = new Character('Nami');
  team.add(Nami);
  const result = {
    members: new Set([{
      name: 'Nami',
    }]),
  };
  expect(team).toEqual(result);
});

test('Тест на дублирование', () => {
  const team = new Team();
  const mrcat = new Character('Nami');
  team.add(nami);
  expect(() => team.add(nami)).toThrow('Персонаж уже существует в команде!');
});

test('check method addAll(...characters)', () => {
  const team = new Team();
  const luffy = new Character('Luffy');
  const chopper = new Character('Chopper');
  const ace = new Character('Ace');

  expect(() => team.addAll(chopper, luffy, nami)).not.toThrow();
});

test('check method toArray(arr)', () => {
  const team = new Team();
  const luffy = new Character('Luffy');
  const chopper = new Character('Chopper');
  const ace = new Character('Ace');
  team.add(luffy);
  team.add(chopper);
  team.add(nami);
  expect(team.toArray()).toEqual([chopper, luffy, nami]);
});
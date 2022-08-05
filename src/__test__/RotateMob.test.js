const Mob = require('../Mob')

test('rotate mob', () => {
  const mob = new Mob()
  mob.join('Alex')
  mob.join('Rhea')
  mob.join('Rex')
  mob.rotate()
  expect(mob.participants()).toStrictEqual(['Rhea', 'Rex', 'Alex'])
})

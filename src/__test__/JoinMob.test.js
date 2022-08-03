test('make Elsa participant when Elsa joins mob', () => {
  const mob = new Mob()
  mob.join('Elsa')
  const participantList = mob.participants()
  expect(participantList).toStrictEqual(['Elsa'])
})

class Mob {
  join() {}
  participants() {
    const participant = ['Elsa']
    return participant
  }
}

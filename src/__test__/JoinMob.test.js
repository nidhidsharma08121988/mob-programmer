test('make Elsa participant when Elsa joins mob', () => {
  const mob = new Mob()
  mob.join('Elsa')
  const participantList = mob.participants()
  expect(participantList).toStrictEqual(['Elsa'])
})

test('make Alex also a participant when Alex joins call', () => {
  const mob = new Mob()
  mob.join('Elsa')
  mob.join('Alex')
  const participantList = mob.participants()
  expect(participantList).toStrictEqual(['Elsa', 'Alex'])
})
class Mob {
  _participants = []
  join(participant) {
    this._participants.push(participant)
  }
  participants() {
    return this._participants
  }
}

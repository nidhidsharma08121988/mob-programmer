class Mob {
  _participants = []
  join(participant) {
    this._participants.push(participant)
  }
  participants() {
    return this._participants
  }
  rotate() {
    const shiftedParticipant = this._participants.shift()
    this._participants.push(shiftedParticipant)
  }
}

module.exports = Mob

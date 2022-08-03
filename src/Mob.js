class Mob {
  _participants = []
  join(participant) {
    this._participants.push(participant)
  }
  participants() {
    return this._participants
  }
}

module.exports = Mob

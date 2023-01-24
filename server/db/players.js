const connection = require('./connection')

module.exports = {
  getPlayers,
  getPlayersByBracket,
  addPlayer,
  deletePlayer,
}

function getPlayers(db = connection) {
  return db('players').select()
}

function getPlayersByBracket(bracket, db = connection) {
  return db('players').select().where('bracket', bracket)
}

function addPlayer(player, db = connection) {
  return db('players').insert(player)
}

function deletePlayer(id, db = connection) {
  return db('players').where('id', id).del().first()
}

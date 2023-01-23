const connection = require('./connection')

module.exports = {
  getPlayers,
  getPlayersByBracket,
  addPlayer,
  deletePlayer,
}

// function sort(fruitArray) {
//   const allFruits = [...fruitArray]
//   allFruits.sort((a, b) => a.id - b.id)
//   return allFruits
// }

function getPlayers(db = connection) {
  return db('players').select()
}

function getPlayersByBracket(bracket, db = connection) {
  return db('players').select().where('bracket', bracket)
}

function addPlayer(player, db = connection) {
  return db('players').insert(player).then(getPlayers)
}

function deletePlayer(id, db = connection) {
  return db('players').where('id', id).del().first()
}

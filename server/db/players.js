const connection = require('./connection')

module.exports = {
  getPlayers,
  getPlayersByBracket,
  addPlayer,
  deletePlayer,
}

function sort(fruitArray) {
  const allFruits = [...fruitArray]
  allFruits.sort((a, b) => a.id - b.id)
  return allFruits
}

async function getPlayers(db = connection) {
  return db('players').select()
}

async function getPlayersByBracket(db = connection, bracket) {
  return db('players').select().where('bracket', bracket)
}

async function addPlayer(player, db = connection) {
  return db('players').insert(player).then(getPlayers)
}

async function deletePlayer(id, db = connection) {
  return db('players').where('id', id).del().first()
}

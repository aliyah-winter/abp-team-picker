import request from 'superagent'

const rootUrl = '/api/v1/players'

export function getPlayers() {
  return request
    .get(rootUrl)
    .then((res) => res.body.players)
    .catch((err) => err.message)
}

export function getPlayersByBracket(bracket) {
  return request
    .get(`${rootUrl}/${bracket}`)
    .then((res) => res.body.players)
    .catch((err) => err.message)
}

export function addPlayer(player) {
  return request
    .post(rootUrl)
    .send({ ...player })
    .catch((err) => err.message)
}

export function deletePlayer(selectedPlayer) {
  return request
    .delete(rootUrl)
    .send(selectedPlayer)
    .catch((err) => err.message)
}

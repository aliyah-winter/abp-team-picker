const express = require('express')
const db = require('../db/players')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/players
router.get('/', async (req, res) => {
  try {
    const players = await db.getPlayers()
    res.json({ players })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// GET /api/v1/players/:bracket
router.get('/:bracket', async (req, res) => {
  try {
    const bracket = req.params.bracket
    const players = await db.getPlayersByBracket(bracket)
    res.json({ players })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// POST /api/v1/players
router.post('/', async (req, res) => {
  const player = req.body
  try {
    const players = await db.addPlayer(player)
    res.json({ players })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// DELETE /api/v1/players

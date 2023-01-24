import React, { useState, useEffect } from 'react'
import Team from './Team'

function Teams({ players }) {
  const [teams, setTeams] = useState([])
  function createTeams(players, numOfTeams) {
    const aPlayers = players.filter((player) => player.bracket === 'A')
    const bPlayers = players.filter((player) => player.bracket === 'B')
    const cPlayers = players.filter((player) => player.bracket === 'C')
    const ranked = [aPlayers, bPlayers, cPlayers]
    ranked.forEach((playerArray) => playerArray.sort(() => Math.random() - 0.5))
    const teams = Array.from({ length: numOfTeams }, () => [])
    let teamIdx = 0
    ranked.forEach((playerArray) => {
      playerArray.forEach((player) => {
        teams[teamIdx].push(player)
        teamIdx = (teamIdx + 1) % numOfTeams
      })
    })
    return teams
  }

  useEffect(() => {
    setTeams(createTeams(players, 5))
  }, [])

  return teams.map((team, teamIdx) => (
    <Team key={team[0].id} team={team} teamIdx={teamIdx} />
  ))
}

export default Teams

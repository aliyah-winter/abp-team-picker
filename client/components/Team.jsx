import React from 'react'
import Player from './Player'

function Team({ team, teamIdx }) {
  return (
    <ul className="mx-4 p-4 shadow-2xl rounded-xl font-heading text-4xl">
      Team {teamIdx + 1}
      {team.map((player) => (
        <Player player={player} key={player.id} />
      ))}
    </ul>
  )
}

export default Team

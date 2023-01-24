import React from 'react'

function Team({ team, teamIdx }) {
  return (
    <ul className="mx-4 p-4 shadow-2xl rounded-xl">
      Team {teamIdx + 1}
      {team.map((player) => (
        <li key={player.id}>
          <button href="#" className="text-purple-700 hover:text-purple-500">
            {player.name} | {player.bracket}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Team

import React, { useEffect, useState } from 'react'

function Team({ team, teamIdx }) {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setHidden(() => false)
    }, 3000)
  }, [])
  return (
    <ul className="mx-4 p-4 shadow-2xl rounded-xl font-heading">
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

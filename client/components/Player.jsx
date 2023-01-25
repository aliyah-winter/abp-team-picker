import React, { useState, useEffect } from 'react'

function Player({ player }) {
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setHidden(() => false)
    }, 3000)
  }, [])

  return (
    !hidden && (
      <li key={player.id}>
        <button
          href="#"
          className="text-purple-700 hover:text-purple-500 text-xl font-sans"
        >
          {player.name} | {player.bracket}
        </button>
      </li>
    )
  )
}

export default Player

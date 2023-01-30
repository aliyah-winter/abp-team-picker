import React from 'react'

function Emoji({ label, symbol }) {
  return (
    <span
      className="emoji text-5xl"
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}

export default Emoji

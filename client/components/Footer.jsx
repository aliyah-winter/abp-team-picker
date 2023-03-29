import React from 'react'
import Emoji from './Emoji'

function Footer() {
  return (
    <footer className="inset-x-0 bottom-0 m-3 text-center">
      {Array.from({ length: 5 }, (num) => (
        <Emoji
          symbol={'🚛'}
          label={'truck'}
          className={'text-5xl md:text-8xl'}
          key={num}
        />
      ))}
    </footer>
  )
}

export default Footer

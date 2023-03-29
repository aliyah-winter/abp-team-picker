import React from 'react'
import Emoji from './Emoji'

function Footer() {
  return (
    <footer className="inset-x-0 bottom-0 m-3 text-center">
      <Emoji symbol={'🚛'} label={'truck'} className={'text-5xl md:text-8xl'} />
      <Emoji symbol={'🚛'} label={'truck'} className={'text-5xl md:text-8xl'} />
      <Emoji symbol={'🚛'} label={'truck'} className={'text-5xl md:text-8xl'} />
      <Emoji symbol={'🚛'} label={'truck'} className={'text-5xl md:text-8xl'} />
      <Emoji symbol={'🚛'} label={'truck'} className={'text-5xl md:text-8xl'} />
    </footer>
  )
}

export default Footer

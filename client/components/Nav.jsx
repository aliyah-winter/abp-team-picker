import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from './Emoji'

function Nav() {
  return (
    <>
      <section className="bg-purple-600 text-white flex justify-center items-center">
        <Emoji symbol={'🛻'} label={'truck'} />
        <h1 className="mx-4 text-6xl font-heading">AUCKLAND BIKE POLO</h1>
        <nav className="flex justify-end gap-4 px-4">
          <Link to="/calendar">Calendar</Link>
          <Link to="/results">Results</Link>
          <Link to="/stats">Stats</Link>
        </nav>
        <Emoji symbol={'🛻'} label={'truck'} />
      </section>
    </>
  )
}

export default Nav

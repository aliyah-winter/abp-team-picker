import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from './Emoji'

function Nav() {
  return (
    <>
      <section className="bg-purple-600 text-white flex justify-center items-center">
        <Emoji symbol={'🛻'} label={'truck'} />
        <h1 className="mx-4 text-6xl font-heading">ABP 2023</h1>
        <Emoji symbol={'🛻'} label={'truck'} />
      </section>
      <section className="bg-green-300">
        <nav className="flex justify-center gap-4 px-4 py-2 text-lg">
          <Link to="/calendar">Calendar</Link>
          <Link to="/results">Results</Link>
          <Link to="/stats">Stats</Link>
        </nav>
      </section>
    </>
  )
}

export default Nav

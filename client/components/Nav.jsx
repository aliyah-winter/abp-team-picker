import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from './Emoji'

function Nav() {
  return (
    <>
      <section className="bg-purple-600 text-white flex justify-center items-center">
        <Emoji symbol={'🛻'} label={'truck'} className={'text-2xl'} />
        <h1 className="mx-4 text-3xl font-heading">Auckland Bike Polo 2023</h1>
        <Emoji symbol={'🛻'} label={'truck'} className={'text-2xl'} />
      </section>
      <section className="bg-green-300">
        <nav className="flex justify-center gap-4 px-4 py-2 text-md">
          <Link to="/calendar" className="active:text-purple-400">
            Calendar
          </Link>
          <Link to="/results" className="active:text-purple-400">
            Results
          </Link>
          <Link to="/stats" className="active:text-purple-400">
            Stats
          </Link>
        </nav>
      </section>
    </>
  )
}

export default Nav

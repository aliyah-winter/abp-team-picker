import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from './Emoji'

function Nav() {
  return (
    <>
      <section className="bg-gradient-to-b from-violet-500 to-fuchsia-500 text-white flex justify-center items-center px-4">
        <Emoji symbol={'🛻'} label={'truck'} className={'text-4xl'} />
        <h1 className="mx-4 my-6 text-4xl font-heading text-center">
          Auckland Bike Polo 2023
        </h1>
        <Emoji symbol={'🛻'} label={'truck'} className={'text-4xl'} />
      </section>
      <section className="bg-green-300 font-body">
        <nav className="flex justify-center gap-4 px-4 py-2 text-md">
          <Link to="/" className="active:text-purple-400">
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

import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <section className="bg-slate-600 text-white flex justify-center items-center">
        <h1 className="mx-4 text-6xl font-heading">AUCKLAND BIKE POLO</h1>
        <nav className="flex justify-end gap-4 px-4">
          <Link to="/">Home</Link>
        </nav>
      </section>
    </>
  )
}

export default Nav

import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Players from './Players'
import Teams from './Teams'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <main className="flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </main>
      <h2 className="m-4 text-center">
        This website was <strike>not</strike> made by Patrick Ryan
      </h2>
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Teams from './Teams'
import Nav from './Nav'
import Calendar from './Calendar'
import Results from './Results'
import Stats from './Stats'

function App() {
  return (
    <>
      <Nav />
      <main className="flex-col items-center justify-between h-screen">
        <Routes>
          <Route path="/" element />
          <Route path="/teams" element={<Teams />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/results" element={<Results />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
      <h2 className="m-4 text-center">
        This website was <strike>not</strike> made by Patrick Ryan
      </h2>
    </>
  )
}

export default App

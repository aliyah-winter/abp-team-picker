import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Calendar from './Calendar'
import Results from './Results'
import Stats from './Stats'

function App() {
  return (
    <>
      <Nav />
      <main className="flex-col md:flex items-center h-screen font-body">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/results" element={<Results />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        <h2 className="m-4 text-center">
          This website was <strike>not</strike> made by Patrick Ryan
        </h2>
      </main>
    </>
  )
}

export default App

// "flex-col md:flex items-center justify-between h-screen font-body"

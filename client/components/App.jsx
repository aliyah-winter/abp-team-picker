import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Calendar from './Calendar'
import Results from './Results'
import Stats from './Stats'
import Footer from './Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <div className="flex-col md:flex-cols-3 md:flex-rows-3 items-center h-screen font-body select-none">
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/results" element={<Results />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App

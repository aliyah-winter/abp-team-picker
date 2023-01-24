import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Players from './Players'
import Teams from './Teams'

function App() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </main>
    </>
  )
}

export default App

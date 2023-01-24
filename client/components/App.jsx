import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Players from './Players'

function App() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <Routes>
          <Route path="/" element={<Players />} />
        </Routes>
      </main>
    </>
  )
}

export default App

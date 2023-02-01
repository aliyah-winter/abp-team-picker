import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Calendar from './Calendar'
import Results from './Results'
import Stats from './Stats'
import Emoji from './Emoji'

function App() {
  return (
    <>
      <Nav />
      <main className="flex-col md:flex items-center h-screen font-body select-none">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/results" element={<Results />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
        <footer className="m-4 text-center">
          <Emoji
            symbol={'🚛'}
            label={'truck'}
            className={'text-5xl md:text-8xl'}
          />
          <Emoji
            symbol={'🚛'}
            label={'truck'}
            className={'text-5xl md:text-8xl'}
          />
          <Emoji
            symbol={'🚛'}
            label={'truck'}
            className={'text-5xl md:text-8xl'}
          />
          <Emoji
            symbol={'🚛'}
            label={'truck'}
            className={'text-5xl md:text-8xl'}
          />
          <Emoji
            symbol={'🚛'}
            label={'truck'}
            className={'text-5xl md:text-8xl'}
          />
        </footer>
      </main>
    </>
  )
}

export default App

// "flex-col md:flex items-center justify-between h-screen font-body"

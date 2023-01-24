import React, { useState } from 'react'

import { addPlayer } from '../api'

function AddPlayer({ setPlayers, closeAddForm, setError }) {
  const [newPlayer, setNewPlayer] = useState(false)

  const handleAddChange = (e) => {
    const { name, value } = e.target
    setNewPlayer({
      ...newPlayer,
      [name]: value,
    })
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    addPlayer(player)
      .then(setPlayers)
      .then(closeAddForm)
      .catch((err) => setError(err.message))
  }

  const { name: addingName, bracket: addingBracket } = newPlayer

  return (
    <>
      <main className="shadow-lg rounded-lg p-4">
        <h2 className="text-2xl my-4 uppercase">Add new player</h2>
        <form
          onSubmit={handleAdd}
          className="flex flex-col justify-start gap-1"
        >
          <label className="grid grid-cols-2 gap-2">
            Name:
            <input
              type="text"
              name="name"
              aria-label="adding-name"
              value={addingName || ''}
              onChange={handleAddChange}
              className="mx-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
            />
          </label>
          <label className="grid grid-cols-2 gap-2">
            Bracket:
            <input
              type="text"
              name="bracket"
              aria-label="adding-bracket"
              value={addingBracket || ''}
              onChange={handleAddChange}
              className="mx-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <button
            type="submit"
            className="rounded-2xl bg-blue-800 hover:bg-blue-600 text-white p-2 px-4 w-fit"
          >
            Add player
          </button>
          <button
            type="button"
            onClick={closeAddForm}
            className="rounded-2xl bg-blue-800 hover:bg-blue-600 text-white p-2 px-4 w-fit"
          >
            Close
          </button>
        </form>
      </main>
    </>
  )
}

export default AddPlayer

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { getPlayers } from '../api'
import { fetchPlayers } from '../slices/players'
import AddPlayer from './AddPlayer'
import Teams from './Teams'

function Players() {
  const dispatch = useDispatch()
  const players = useSelector((state) => state.players)
  const [error, setError] = useState('')
  // const [players, setPlayers] = useState([])
  const [adding, setAdding] = useState(false)
  const [sorting, setSorting] = useState(false)
  const [selected, setSelected] = useState(null)

  function hideError() {
    setError('')
  }

  function openAddForm(e) {
    e.preventDefault()
    setAdding(true)
  }

  function closeAddForm() {
    setAdding(false)
  }

  // function setSelectHandler(player, e) {
  //   e.preventDefault()
  //   console.log(e.target)
  //   setSelected(player)
  // }

  // function clearSelected() {
  //   setSelected(null)
  // }

  useEffect(() => {
    dispatch(fetchPlayers())
  }, [])
  return (
    <section className="flex flex-col gap-4 items-center justify-center h-screen">
      <div onClick={hideError}>{error && `Error: ${error}`}</div>
      <ul className="p-4 shadow-2xl rounded-xl">
        {players.map((player) => (
          <li key={player.id}>
            <button
              href="#"
              onClick={(e) => setSelectHandler(player, e)}
              className="text-purple-700 hover:text-purple-500"
            >
              {player.name}, {player.bracket}
            </button>
          </li>
        ))}
      </ul>
      {adding ? (
        <AddPlayer
          setError={setError}
          setPlayers={setPlayers}
          closeAddForm={closeAddForm}
        />
      ) : (
        <button
          href="#"
          onClick={openAddForm}
          className="rounded-2xl bg-blue-800 hover:bg-blue-600 text-white p-2 px-4"
        >
          Add a Player
        </button>
      )}
      {sorting ? (
        <Teams players={players} />
      ) : (
        <button
          href="#"
          onClick={() => setSorting(true)}
          className="rounded-2xl bg-blue-800 hover:bg-blue-600 text-white p-2 px-4"
        >
          Randomise
        </button>
      )}
      {/* {selected && (
        <SelectedFruit
          selected={selected}
          clearSelected={clearSelected}
          setError={setError}
          setFruits={setFruits}
        />
      )} */}
    </section>
  )
}

export default Players

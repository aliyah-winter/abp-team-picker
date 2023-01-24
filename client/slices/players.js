import { getPlayers, addPlayer } from '../api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async () => {
    const players = await getPlayers()
    return players
  }
)

export const postPlayerThenFetch = createAsyncThunk(
  'players/postPlayer',
  async (player) => {
    await addPlayer(player)
    const players = await getPlayers()
    return players
  }
)

const playerSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchPlayers.fulfilled]: (state, action) => {
      return action.payload
    },
    [postPlayerThenFetch.fulfilled]: (state, action) => action.payload,
  },
})

export default playerSlice.reducer

import { configureStore } from '@reduxjs/toolkit'
import players from './players'

const store = configureStore({
  reducer: {
    players,
  },
})

export default store

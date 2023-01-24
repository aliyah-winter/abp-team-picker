import { configureStore, combineReducers } from '@reduxjs/toolkit'
import players from './players'

const reducer = combineReducers({
  players,
})

const store = configureStore({
  reducer,
})

export default store

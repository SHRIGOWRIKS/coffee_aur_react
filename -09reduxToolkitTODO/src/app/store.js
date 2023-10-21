import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

//First step to create a store using configure store

export const store=configureStore({
    reducer:todoReducer
})


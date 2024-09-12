import { configureStore } from '@reduxjs/toolkit'
import { dataSlice, planetSlice } from './'


export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        planet: planetSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
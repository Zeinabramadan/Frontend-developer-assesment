import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slices/auth'
import { apiSlice } from './slices/api'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})
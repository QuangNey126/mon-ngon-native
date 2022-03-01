import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './slices/favorite'
import viewedReducer from './slices/viewed'


const store = configureStore({
    reducer: {
        favorite : favoriteReducer,
        viewed : viewedReducer
    },
});

export default store;
import { createSlice } from '@reduxjs/toolkit'


export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState : {
      items : []
  },
  reducers: {
    toggleFavorite: (state,action) => {
        const { id } = action.payload
        const item = state.items.find(item => item === id);
        if(item){
            state.items = state.items.filter(item => item !== id)
        }else{
            state.items = [...new Set([id,...state.items])]
        }
    },
    removeProductFavorite : (state , action) => {
        const { id } = action.payload
        state.items = state.items.filter(item => item !== id)
    },
    removeAllProduct : (state , action ) => {
        state.items = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleFavorite , removeProductFavorite , removeAllProduct } = favoriteSlice.actions

export default favoriteSlice.reducer

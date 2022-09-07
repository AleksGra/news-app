import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const newsListSlice = createSlice({
    name: 'newList',
    initialState,
    reducers: {
        setNewsList: (state, action) => {
           state.value=[...action.payload]

        }
    }
})

export const {setNewsList} = newsListSlice.actions
export default newsListSlice.reducer
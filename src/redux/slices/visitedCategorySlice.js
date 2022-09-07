import {createSlice} from '@reduxjs/toolkit'

const localStorageData = JSON.parse(localStorage.getItem("visitedCategories"))
const initialState = {
    value: localStorageData || []
};

export const visitedCategorySlice = createSlice({
    name: 'visitedCategory',
    initialState,
    reducers: {
        setVisitedCategories: (state, action) => {

            state.value = [...state.value, action.payload].slice(-3)

        }
    }
})

export const {setVisitedCategories} = visitedCategorySlice.actions
export default visitedCategorySlice.reducer
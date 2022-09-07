import {configureStore} from '@reduxjs/toolkit'
import categoryReducer from './slices/categorySlice'
import searchReducer from './slices/searchSlice'
import newsListReducer from './slices/newsListSlice'
import visitedCategoryReducer from './slices/visitedCategorySlice'

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        search: searchReducer,
        newsList:newsListReducer,
        visitedCategory:visitedCategoryReducer
    },
})
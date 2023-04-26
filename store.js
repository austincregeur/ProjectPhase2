import { configureStore } from "@reduxjs/toolkit";

import questionReducer from './slices/questionSlice'

const store = configureStore({
    reducer: {
        questionData: questionReducer
    }
})

export default store;
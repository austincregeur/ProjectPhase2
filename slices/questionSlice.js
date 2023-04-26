import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score: 0,
    questionNumber: 0
}

//setters(reducers)
export const questionSlice = createSlice({
    name: "questionData",
    initialState: initialState,
    reducers: {
        setScore: (state, action) => {state.score = action.payload},
        increaseScore: (state, action) => {state.score = state.score + 1},
        increaseQuestionNumber: (state, action) => {state.questionNumber += 1},
        reset: (state, action) => {
            state.score = initialState.score;
            state.currentAnswer = initialState.currentAnswer;
            state.questionNumber = initialState.questionNumber;
        }
    }
})

//selectors(getters)
export const selectScore = (state) => state.questionData.score;
export const selectQuestionNumber = (state) => state.questionData.questionNumber;

export const {setScore, increaseQuestionNumber, increaseScore, reset} = questionSlice.actions
export default questionSlice.reducer;
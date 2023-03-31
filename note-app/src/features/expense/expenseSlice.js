import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        exepenseList: [
            {name: 'apple', price: 1200},
            {name: 'orange', price: 5000}
        ]
    },
    reducers: {
        addExpense: (currentSlice, action) => {
            currentSlice.exepenseList.push({name: 'test', price: 5555})
        }
    }
})

export const { addExpense } = expenseSlice.actions

export default expenseSlice.reducer

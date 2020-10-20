import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createAt = 0}) => {
    return (
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createAt
            }
        }
    )
}

// REMOVE_EXPENSE

const removeExpense = ({id} = {}) => {
    return (
        {
            type: 'REMOVE_EXPENSE',
            id
        }
    )
}
// EDIT_EXPENSE

const editExpense = (id, update) => {
    return (
        {
            type: 'EDIT_EXPENSE',
            id,
            update
        }
    )
}

// SET_TEXT_FILTER

const setTextFilter = (text = '') => {
    return (
        {
            type: 'SET_TEXT_FILTER',
            text
        }
    )
}

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                } else {
                    return expense
                }
            }) 
        default: 
            return state
    }
}

const filtersRecuderDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersRecuderDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default: 
            return state
    }
}

// Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'place', amount: 100}))

store.dispatch(removeExpense({id: expenseOne.expense.id}))

store.dispatch(editExpense(expenseTwo.expense.id, {amount: 300}))

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

const demoState ={
    expenses: [{
        id: 'asasdf',
        description: 'Jan Rent',
        note: 'Final payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

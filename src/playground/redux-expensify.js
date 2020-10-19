import { createStore, combineReducers } from 'redux'


// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
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
        default: 
            return state
    }
}

// Store creation

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))

console.log(store.getState())

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
        startDate: underfined,
        endDate: undefined
    }
}
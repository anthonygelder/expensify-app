import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import expenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({description: 'rent bill', amount: 200, createdAt: -1000}))
store.dispatch(addExpense({description: 'place', amount: 100, createdAt: 11000}))
store.dispatch(addExpense({description: 'water bill', amount: 1000, createdAt: 1100}))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
console.log(state)

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
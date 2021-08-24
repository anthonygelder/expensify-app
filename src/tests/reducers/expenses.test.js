import { expect, test } from '@jest/globals'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1000000'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add new expense', () => {
    const expense = {
        id: '4',
        description : 'Food',
        note: '',
        amount: 400,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        update: {
            description: 'Something'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe('Something')
})

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1000000',
        update: {
            description: 'Something'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
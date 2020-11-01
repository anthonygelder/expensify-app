import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should remove expense', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    })
})

test('should edit expense', () => {
    const action = editExpense('123abc', {note: 'new value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: {
            note: 'new value'   
        }
    })
})

test('should add expense', () => {
    const expenseData = {
        description: 'Rent',
        amount: 123123,
        createdAt: 1000,
        note: 'note'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should add expense with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })
})
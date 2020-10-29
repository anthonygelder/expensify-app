import React from 'react'
import { Link } from 'react-router-dom'
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = (props) => (
    <div>
        <p>{props.description}</p>
        <p>{props.amount}</p>
        <p>{props.createdAt}</p>
        <Link to={`/edit/${props.id}`}>Edit</Link>
    </div>
)

export default ExpenseListItem
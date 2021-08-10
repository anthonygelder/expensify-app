import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>{description}</h3>
        <p>Amount - {amount}</p>
        <p>Created At - {createdAt}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
    </div>
)

export default ExpenseListItem
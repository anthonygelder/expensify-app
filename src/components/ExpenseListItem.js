import React from 'react'

const ExpenseListItem = (props) => (
    <div>
        <p>{props.description}</p>
        <p>{props.amount}</p>
        <p>{props.createdAt}</p>
    </div>
)

export default ExpenseListItem
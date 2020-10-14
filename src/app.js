import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => {
    return (

        <div>
        thhs is a componenet
        </div>
        )
    }

    const AddExpensePage = () => {
        return (

            <div>
                Add Expense
            </div>
        )
    }

    const EditExpensePage = () => {
        return (

            <div>
                Edit Expense
            </div>
        )
    }

    const HelpPage = () => {
        return (

            <div>
                Help
            </div>
        )
    }

    const NotFoundPage = () => {
        return (

            <div>
                404!
                <Link to="/">Go home</Link>
            </div>
        )
    }

    
    const Header = () => {
        return (

            <div>
                This is a header
                <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
                <NavLink to="/help" activeClassName="is-active">Help</NavLink>
            </div>
        )
    }

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))

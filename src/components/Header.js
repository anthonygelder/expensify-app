import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>This is a header</h1>
            <p>fsdfa</p>
            <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </div>
    )
}

export default Header;


// higher order components HOC
// A component (HOC) that renders another component
// goal is to reuse code
// render hijacking
// prop manipulation
// abstract state


import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Hello</h1>
        <p>The info is {props.info}</p>
    </div>    
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Not authenticated, please log in</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuth(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the info" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={false} info="This is the info" />, document.getElementById('app'))
import {createStore} from 'redux'

// action generators returns action objects

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const reset = () => {
    return {
        type: "RESET"
    }
}

const setCount = ({ count } = {}) => {
    return {
        type: "SET", 
        count: count
    }
}

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default: state
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(reset())
store.dispatch(incrementCount())

store.dispatch(decrementCount({decrementBy: 5}))
store.dispatch(decrementCount())


store.dispatch(setCount({count: 111}))


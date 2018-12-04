const redux = require('redux')

const initalState = {
    counter : 0
}

const createStore = redux.createStore

const rootReducer = (state = initalState, action) => {
    if (action.type == "INCREMENT_COUNTER"){
    return {
        ...state,
        counter: state.counter + 1
        }
    }

    else if (action.type == "ADD_COUNTER"){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }

    else if (action.type == "DECREMENT_COUNTER"){
        return{
            ...state,
            counter: state.counter - 1
        }

    }

    else if(action.type == "SUBTRACT_COUNTER"){
        return{
            ...state,
            counter: state.counter - action.value
        }
    }

    return state
}

const store = createStore(rootReducer)
store.dispatch({ type: 'INCREMENT_COUNTER' })
store.dispatch({ type: 'INCREMENT_COUNTER' })
store.dispatch({ type: 'INCREMENT_COUNTER' })

store.dispatch({ type: 'DECREMENT_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', value: 7 })
store.dispatch({ type: 'SUBTRACT_COUNTER', value: 7 })

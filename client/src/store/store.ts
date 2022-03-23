import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

export type GlobalState = { 
    user: string;
}

const store = createStore<GlobalState, any, any, any>(
    //Reducers Go Here
    reducers,

    //Initial State
    { user: "chris" },

    //Middleware 
    applyMiddleware(thunk)
)

export default store;
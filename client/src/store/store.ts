import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
    //Reducers Go Here
    reducers,

    //Initial State
    {},

    //Middleware 
    applyMiddleware(thunk)
)

export default store;
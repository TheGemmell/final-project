import { createStore, applyMiddleware, Reducer, Action } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import { DefaultRootState } from 'react-redux';

export type GlobalState = { 
    user: string;
}

const store = createStore<DefaultRootState, Action, any, any>(
    //Reducers Go Here
    reducers,

    //Initial State
    {},

    //Middleware 
    applyMiddleware(thunk)
)

export default store;
import { createAction, createReducer } from "@reduxjs/toolkit"

interface Action {
    type: string,
    payload: any, 
}

const initalState = { 
    user: null,
    token: null,
}

const signup = createAction('user/signup')
const login = createAction('user/login')

const userReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(signup, (state, action:Action) => {
            console.log('userReducer.ts: User Created: ', state)
            let token = action.payload.token
            let user = action.payload.user
            state.token = token
            state.user = user
        })
        .addCase(login, (state, action:Action) => {
            console.log('userReducer.ts: User Logged in: ', state)
            let token = action.payload.token
            let user = action.payload.user
            state.token = token
            state.user = user
        })
})

export default userReducer
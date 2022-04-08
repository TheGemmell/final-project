import { createAction, createReducer } from "@reduxjs/toolkit"

export interface Action {
    type: string,
    payload: any, 
}

interface UserState {
    username: null | string,
    firstname: null | string,
    lastname: null | string,
    token: null | string,
}

const signup = createAction('user/signup')
const login = createAction('user/login')

const initialState = {
    username: null,
    firstname: null,
    lastname: null,
    token: null,
} as UserState

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(signup, (state:UserState, action:Action) => {
            console.log('userReducer.ts: User Created: ', action)
            let token = action.payload.token
            let user = action.payload.user
            state.token = token
            state.firstname = user.firstname
            state.lastname = user.lastname
            state.username = user.username
        })
        .addCase(login, (state:UserState, action:Action) => {
            console.log('userReducer.ts: User Logged in: ', action)
            let token = action.payload.token
            let user = action.payload.user
            state.token = token
            state.firstname = user.firstname
            state.lastname = user.lastname
            state.username = user.username
        })
})

export default userReducer


import { createAction, createReducer } from "@reduxjs/toolkit"

interface Action {
    type: string,
    payload: any, 
}

type Workout = {
    id: number,
    created_at: string,
    date: string,
    description: string,
    title: string,
    updated_at: string,
    user_id: number
}

const add = createAction('workout/add')
const fetch = createAction('workout/fetch')
const remove = createAction('workout/delete')

const initialState = {
    data: []
}



const workoutReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetch, (state, action: Action) => {
            console.log('payload: ', action.payload)
            state.data = action.payload 
            console.log(state)
        })
        .addCase(add, (state, action:Action) => {
            console.log('userReducer.ts: User Created: ', action)


        })
        .addCase(remove, (state, action:Action) => {
            // let token = action.payload.token
            // let user = action.payload.user
            // state.token = token
            // state.firstname = user.firstname
            // state.lastname = user.lastname
            // state.username = user.username
        })
})

export default workoutReducer
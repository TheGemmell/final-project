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

interface State {
    data: Workout[] | []
}

const add = createAction('workout/add')
const fetch = createAction('workout/fetch')
const remove = createAction('workout/delete')

const initialState = {
    data: []
} as State



const workoutReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetch, (state, action: Action) => {
            console.log('payload: ', action.payload)
            state.data = action.payload 
            console.log(state)
        })
        .addCase(add, (state, action:Action) => {
            console.log('userReducer.ts: User Created: ', action)
            state.data = [action.payload, ...state.data]
        })
        .addCase(remove, (state, action:Action) => {
            const newState = state.data.filter((data) => {
                return data.id !== action.payload
            })
            state.data = newState
        })
})

export default workoutReducer
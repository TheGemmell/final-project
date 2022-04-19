import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer';
import workoutReducer from './reducers/workoutReducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        workouts: workoutReducer,
    },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
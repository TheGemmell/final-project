// Functions that fire/dispatches actions for the 
// reducers to read and deal with  

export const signUp = (payload:any) => {
    console.log('Action signUp, Payload: ', payload);
    return (dispatch:Function) => {
        dispatch({
            type: 'signup',
            payload: payload
        })
    }
}

export const logIn = (payload:any) => {
    console.log('Action logIn, Payload: ', payload);
    return (dispatch:Function) => {
        dispatch({
            type: 'login',
            payload: payload
        })
    }
}
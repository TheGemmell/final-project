
interface Action {
    type: string,
    payload: any, 
}


export default function reducer(state:any = {}, action:Action) {
    console.log('userReducer: ', action)
    switch (action.type) {
        case "signup":
            let token = action.payload.token
            console.log("Token Received: ", token)
            return token
        case "login":
            return 'Reduced Login'
        default:
            return state
    }
}
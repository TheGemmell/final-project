import { Reducer, Action } from "redux";


export default function reducer(state:any = {}, action:Action) {
    switch (action.type) {
        case "signup":
            return 'Reduced Signup'
        case "login":
            return 'Reduced Login'
        default:
            return state
    }
}
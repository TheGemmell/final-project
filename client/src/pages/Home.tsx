import { useState, useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'

export default function Home() {

    const [auth, setAuth] = useState(null)


    return (
        <div>
        { auth ? <Login /> : <Signup />}    
        </div>
    )
}
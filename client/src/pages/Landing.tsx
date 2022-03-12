import { useState, useEffect } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

export default function LandingPage() {

    const [auth, setAuth] = useState(null)


    return (
        <div>
        { auth ? <Login /> : <Signup />}    
        </div>
    )
}
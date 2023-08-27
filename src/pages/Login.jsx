import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    return (
        <>
            <div className="wrapper center">
                <button onClick={() => navigate('/form')}>Login</button>
            </div>
        </>
    )
}

export default Login
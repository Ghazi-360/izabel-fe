import React from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlanContext } from '../contexts/PlanContext'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'


function Login() {

    const navigate = useNavigate()
    const { updateUserValues } = usePlanContext()

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const email = result.user.email;
            const name = result.user.displayName;
            const id = result.user.uid

            updateUserValues(email, name, id)
            navigate('/form')    
        }).catch((error) => {
            alert(error.message)
        });
    }

    return (
        <>
            <div className="wrapper center">
                <div className="login-wrapper">
                    <button onClick={() => signInWithGoogle()}> Google Signin</button>                    
                </div>
            </div>
        </>
    )
}

export default Login
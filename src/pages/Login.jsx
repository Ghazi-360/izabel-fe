import React, { useState } from 'react'
import { auth } from '../firebase'
import { sendSignInLinkToEmail } from 'firebase/auth'

function Login() {

    const [email, setEmail] = useState("")
    const [emailSent, setEmailSent] = useState(null)
    
    const sendSignInLink = (e) => {
        e.preventDefault()
        const actionCodeSettings = {
          url: `${window.location.origin}/form`, // URL to redirect after email confirmation
          handleCodeInApp: true,
        };
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // Email sent successfully
            window.localStorage.setItem("emailForSignIn", email);
            setEmailSent(true)
        })
        .catch((error) => {
            setEmailSent(false);
        });
    };

    return (
        <>
            <div className="wrapper center">
                <div className="login-wrapper">
                    <div className="login-input">
                        <form onSubmit={(e) => sendSignInLink(e)}>
                            <input onChange={(e) => setEmail(e.target.value)} type="email"placeholder='email' />
                            <button className='BTN'>Login</button>
                        </form>
                    </div>
                    <div className="message">
                        {emailSent && (
                            <p>An email with a sign-in link has been sent to your email address.</p>
                        )}
                        {emailSent === false && (
                            <p>Error sending email link. Please try again.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
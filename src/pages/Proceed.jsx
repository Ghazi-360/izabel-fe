import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Proceed() {

    const navigate = useNavigate()
    const plan = JSON.parse(localStorage.getItem("planData")).name
    const email = window.localStorage.getItem("emailForSignIn")

    console.log(email)

    let posts;

    if (plan === 'Beginner') {
        posts = 7;
    } else if (plan === 'Intermediate') {
        posts = 15;
    } else if (plan === 'Professional'){
        posts = 30
    } else {}

    const proceed = () => {
        const storedFormData = JSON.parse(localStorage.getItem("formData"));
        axios.post('https://api.izabel.ai/api/service', 
            { 
                url: storedFormData.url,
                number_of_posts: posts,
                email: email,
                language: storedFormData.language,
                writing_style: storedFormData.writing_style,
                target_country: storedFormData.target_country,
                target_city: storedFormData.target_city,
            }
        )
        .then((response) => {
            navigate('/account')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="wrapper center">
            <div className="login-wrapper">
                <p>Please Click to proceed to your Account!</p>
                <button onClick={() => proceed()}>Proceed</button>                    
            </div>
        </div>
    )
}

export default Proceed
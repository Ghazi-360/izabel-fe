import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Proceed() {

    const navigate = useNavigate()
    const plan = JSON.parse(localStorage.getItem("formData")).selectedPlan;

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
                email: storedFormData.email,
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
                <button onClick={() => proceed()}>Proceed</button>                    
            </div>
        </div>
    )
}

export default Proceed
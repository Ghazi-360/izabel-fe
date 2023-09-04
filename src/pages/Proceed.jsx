import axios from 'axios';
import React from 'react'
import { usePlanContext } from '../contexts/PlanContext';
import { useNavigate } from 'react-router-dom';

function Proceed() {

    const navigate = useNavigate()
    const { selectedPlan, formData } = usePlanContext()

    let posts;

    if (selectedPlan.name === 'Beginner') {
        posts = 7;
    } else if (selectedPlan.name === 'Intermediate') {
        posts = 15;
    } else {
        posts = 30
    }

    const proceed = () => {
        axios.post('https://api.izabel.ai/api/service', 
            { 
                url: formData.url,
                number_of_posts: posts,
                email: formData.email,
                language: formData.language,
                writing_style: formData.writing_style,
                target_country: formData.target_country,
                target_city: formData.target_city,
            }
        )
        .then((response) => {
            console.log(response)
            navigate('/account')
            // setApiResponse(response.data.content);
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
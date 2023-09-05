import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { usePlanContext } from '../contexts/PlanContext';

function Plan() {

    const navigate = useNavigate()
    const { updatePlan } = usePlanContext()

    const handleSubscribe = (name, link) => {
        updatePlan(name, link);  
        navigate('/login');
    }

    return (
        <>
            <div className="wrapper center">
                <div className="plans-wrapper">
                    <div className="plan-card">
                        <h3>Beginner</h3>
                        <p>7 Instagram Posts</p>
                        <p>7 Facebook Posts</p>
                        <p>7 Twitter Posts</p>
                        <p>7 Pinterest Posts</p>
                        <p>7 TikTok Posts</p>
                        <p>7 Linkedin Posts</p>
                        <p>42 Posts in Total</p>
                        <p>$39</p>
                        <button onClick={() => handleSubscribe('Beginner','https://buy.stripe.com/test_fZe8wMdFP4Jm67SfYY?email=email')}>Subscribe</button>
                    </div>
                    <div className="plan-card">
                        <h3>Intermediate</h3>
                        <p>14 Instagram Posts</p>
                        <p>14 Facebook Posts</p>
                        <p>14 Twitter Posts</p>
                        <p>14 Pinterest Posts</p>
                        <p>14 TikTok Posts</p>
                        <p>14 Linkedin Posts</p>
                        <p>84 Posts in Total</p>
                        <p>$59</p>
                        <button onClick={() => handleSubscribe('Intermediate','https://buy.stripe.com/test_dR600geJT6Rucwg9AB?email=email')}>Subscribe</button>
                    </div>
                    <div className="plan-card">
                        <h3>Professional</h3>
                        <p>30 Instagram Posts</p>
                        <p>30 Facebook Posts</p>
                        <p>30 Twitter Posts</p>
                        <p>30 Pinterest Posts</p>
                        <p>30 TikTok Posts</p>
                        <p>30 Linkedin Posts</p>
                        <p>180 Posts in Total</p>
                        <p>$99</p>
                        <button onClick={() => handleSubscribe('Professional','https://buy.stripe.com/test_bIY8wM7hrdfS67S146?email=email')}>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan
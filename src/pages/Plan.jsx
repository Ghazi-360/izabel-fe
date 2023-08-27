import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Plan() {

    const navigate = useNavigate()

    return (
        <>
            <div className="wrapper center">
                <div className="plans-wrapper">
                    <div className="plan-card">
                        <h3>Beginner</h3>
                        <p>Faeda number 1</p>
                        <p>Faeda number 1</p>
                        <p>Faeda number 1</p>
                        <p>$25</p>
                        <button onClick={() => navigate('/login')}>Subscribe</button>
                    </div>
                    <div className="plan-card">
                        <h3>Intermediate</h3>
                        <p>Faeda number 2</p>
                        <p>Faeda number 2</p>
                        <p>Faeda number 2</p>
                        <p>$50</p>
                        <button onClick={() => navigate('/login')}>Subscribe</button>
                    </div>
                    <div className="plan-card">
                        <h3>Professional</h3>
                        <p>Faeda number 3</p>
                        <p>Faeda number 3</p>
                        <p>Faeda number 3</p>
                        <p>$100</p>
                        <button onClick={() => navigate('/login')}>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan
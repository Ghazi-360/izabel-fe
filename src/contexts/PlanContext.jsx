import React, { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const usePlanContext = () => {
    return useContext(PlanContext);
}

export const PlanProvider = ({ children }) => {

    // Check user selected plan and link to Stripe Payment for respective plane
    const [selectedPlan, setSelectedPlan] = useState({link: ""});

    const updatePlan = (name, link) => { 
        const planData = {
            name: name,
            stripeLink: link
        }
        setSelectedPlan(planData) 
        window.localStorage.setItem("planData", JSON.stringify(planData))
    }

    // Load formData from localStorage on component initialization
    const initialFormData = JSON.parse(window.localStorage.getItem("formData")) || {
        url: "",
        number_of_posts: 0,
        email: "",
        language: "",
        writing_style: "",
        target_country: "",
        target_city: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    // Update formData and also save it to localStorage whenever it changes
    const updateFormData = (url, email, language, style, country, city) => {
        const newFormData = {
            url,
            email,
            language,
            writing_style: style,
            target_country: country,
            target_city: city,
        };

        setFormData(newFormData);

        // Save the updated formData to localStorage
        window.localStorage.setItem("formData", JSON.stringify(newFormData));
    };

    return (
        <PlanContext.Provider value={{ selectedPlan, formData, updatePlan, updateFormData }}>
            {children}
        </PlanContext.Provider>
    );
};


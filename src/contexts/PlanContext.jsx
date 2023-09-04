import React, { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const usePlanContext = () => {
    return useContext(PlanContext);
}

export const PlanProvider = ({ children }) => {

    // Check user selected plan and link to Stripe Payment for respective plane
    const [selectedPlan, setSelectedPlan] = useState({link: ""});

    const updatePlan = (name, link) => { 
        setSelectedPlan({
            name: name,
            link: link
        }) 
    }

    // Store User information after Google Sign up
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        id: 0
    })

    const updateUserValues = (email, name, id) => {
        setUserData({
            email: email,
            name: name,
            id: id
        });
    };

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
    const updateFormData = (url, email, language, style, country, city, plan) => {
        const newFormData = {
            url,
            email,
            language,
            writing_style: style,
            target_country: country,
            target_city: city,
            selectedPlan: plan
        };

        setFormData(newFormData);

        // Save the updated formData to localStorage
        window.localStorage.setItem("formData", JSON.stringify(newFormData));
    };

    return (
        <PlanContext.Provider value={{ userData, selectedPlan, formData, updatePlan, updateUserValues, updateFormData }}>
            {children}
        </PlanContext.Provider>
    );
};


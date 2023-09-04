import React, { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const usePlanContext = () => {
    return useContext(PlanContext);
}

export const PlanProvider = ({ children }) => {
    const [selectedPlan, setSelectedPlan] = useState({link: ""});

    const updatePlan = (name, link) => { 
        setSelectedPlan({
            name: name,
            link: link
        }) 
    }

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

    return (
        <PlanContext.Provider value={{ userData, selectedPlan, updatePlan, updateUserValues }}>
            {children}
        </PlanContext.Provider>
    );
};


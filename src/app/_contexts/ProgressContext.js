"use client"
import React, { createContext, useContext, useState } from "react";

//Creating Context for Progress Bar
const ProgressContext = createContext();

export const ProgressProvider = ({children}) => {
    const [isProgressVisible,setIsProgressVisible] = useState(false);

    const showProgress = () => setIsProgressVisible(true);

    const hideProgress = () => setIsProgressVisible(false);

    return (
        <ProgressContext.Provider value={{isProgressVisible,showProgress,hideProgress}}>
            {children}
        </ProgressContext.Provider>
    );

};

export const useProgress = () => useContext(ProgressContext)
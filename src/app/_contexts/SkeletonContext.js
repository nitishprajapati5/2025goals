"use client"
import React, { createContext, useContext, useState } from "react"


const SketelonContext = createContext()

export const SketelonProvider = ({children}) => {
    const [isSkeletonVisible,setIsSkeletonVisible] = useState(false)

    const showSkeleton = () => setIsSkeletonVisible(false)

    const hideSkeleton = () => setIsSkeletonVisible(true)

    return (
        <SketelonContext.Provider value={{isSkeletonVisible,showSkeleton,hideSkeleton}}>
            {children}
        </SketelonContext.Provider>
    );
};

export const useSkeleton = () => useContext(SketelonContext)
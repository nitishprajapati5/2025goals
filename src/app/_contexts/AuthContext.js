"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) =>{
    const router = useRouter()

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            response => response,
            (error) =>{
                if(error.response && error.response.status === 401){
                    router.replace('/login')
                }
                return Promise.reject(error)
            }
        );

        return () =>{
            axios.interceptors.response.eject(interceptor)
        }

    },[]);
}

export const useAuth = () => useContext(AuthContext)
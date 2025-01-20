"use server"

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { verifyIsLoggedIn } from "./app/api/_utils/verifyJWT";
import axios from "axios";

const prisma = new PrismaClient()

export default async function middleware(request){

    // console.log("----------------------------data-----------------------",data)
    // console.log(request.nextUrl.pathname)
    if(request.nextUrl.pathname === '/api/auth'){
        return NextResponse.next()
    }
    if(request.nextUrl.pathname !== '/api/auth'){
        // const isLoggedIn = await verifyIsLoggedIn(request)
        // const cookieStore = cookies()
        // console.log(request)
        // const authCookie = (await cookieStore).get('auth-cookie').value

        // await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/hello`,{
        //     method:"GET"
        // }).then( async res => {
        //     console.log("Hi Nitish JSON Generating",await res.json())
        // }).catch((error) => {
        //     console.log(error)
        // })

        const data = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/api/verifyAuthToken`,{
            headers:{
                "Authorization":request.cookies.get('auth-cookie')
            }
        })
        //console.log(data.json())
        // const ans = await data.json()


        // console.log(ans)

        // if(!isLoggedIn){
        //     return NextResponse.redirect(new URL("/login"),request.url)
        // }
    }

    return NextResponse.next();
   
   
}

export const config = {
    matcher: ['/api/:auth','/api/verifyAuthToken'] // You can customize this to target specific API routes
};
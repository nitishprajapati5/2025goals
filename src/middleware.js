"use server"

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { verifyIsLoggedIn } from "./app/api/_utils/verifyJWT";
import axios from "axios";

const prisma = new PrismaClient()

// async function verifyJWT(authCookie){
//     const data = jwt.decode(authCookie,process.env.JWT_SECRET_KEY)
//     let isLoggedIn = true;
//     if(data.exp * 1000 < Date.now()){
//         isLoggedIn = false
//     }
//     const user = await prisma.registration.findFirst({
//         where:{
//             AND:{
//                 username:data.user.username,
//                 password:data.user.password
//             }
//         }
//     })

//     return {user,isLoggedIn};
    
// }

export default async function middleware(request){
    console.log("Middleware Hit")

    const isLoggedIn = await verifyIsLoggedIn(request)
    if(!isLoggedIn){
        NextResponse.redirect(new URL("/login"),request.url)
    }
   
    return NextResponse.next()
}

export const config = {
    matcher: ['/api/:auth','/'] // You can customize this to target specific API routes
};
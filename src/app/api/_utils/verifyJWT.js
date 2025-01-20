import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';
import { use } from 'react';

const prisma = new PrismaClient()

export async function decodeJWT(request){
    // console.log(request)
    let isLoggedIn = false;
    const cookieStore = cookies()
    const authCookie = (await cookieStore).get('auth-cookie').value

    const data = jwt.decode(authCookie,process.env.JWT_SECRET_KEY)

    const user = await prisma.registration.findFirst({
        where:{
            AND:{
                username:data.user.username,
                password:data.user.password
            }
        }
    })

    if(data.exp * 1000 < Date.now()){
        isLoggedIn = true
    }

    return {isLoggedIn,user}
}


export async function verifyIsLoggedIn(request){
    const cookieStore = cookies()
    const authCookie = (await cookieStore).get('auth-cookie').value

    const data = jwt.decode(authCookie,process.env.JWT_SECRET_KEY)
    let isLoggedIn = true;

    console.log(authCookie)

    if(data.exp * 1000 < Date.now()){
        isLoggedIn = false
    }
    return isLoggedIn;    
    
}


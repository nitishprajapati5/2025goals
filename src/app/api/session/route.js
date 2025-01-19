import { cookies } from "next/headers";
import verifyJWT from "../_utils/verifyJWT";
import { NextResponse } from "next/server";

export async function GET(request){
    
    const cookiesStore = cookies()
    const authCookie = (await cookiesStore).get('auth-cookie').value
    console.log(authCookie)
    const {user,isLoggedIn} = await verifyJWT(authCookie)
    // console.log(user,isLoggedIn)
    return NextResponse.json({
        user:user,
        isLoggedIn:isLoggedIn
    })

}
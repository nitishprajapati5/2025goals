import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request){
    const authorization = (await headers()).get('Authorization')  
    console.log(authorization)  
    return NextResponse.json({
        "message":"Okay Nitish"
    })
}
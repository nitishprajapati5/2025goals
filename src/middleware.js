import { NextResponse } from "next/server";

export default async function middleware(request){
    console.log("Middleware Hit")
    const data = await request.json()
    if(data.endpoint === ""){
        return NextResponse.json({
            "message":"Invalid Request"
        },{
            status:405,
            statusText:"Method Not Allowed"
        })
    }
    return NextResponse.next()
}

export const config = {
    matcher:'/api/auth'
}
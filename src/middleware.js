import { NextResponse } from "next/server";

export default function middleware(request){
    console.log("Middleware Hit")
    // return NextResponse.redirect(new URL('/',request.url))
    return NextResponse.next()
}

export const config = {
    matcher:'/api/auth'
}
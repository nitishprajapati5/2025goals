import { NextResponse } from "next/server";
import dbConnection from "./app/api/_dbConnection/dbConnection";

export default async function middleware(request){
    console.log("Middleware Hit")


    // //const data = await request.json()
    // if(data.endpoint === ""){
    //     return NextResponse.json({
    //         "message":"Invalid Request"
    //     },{
    //         status:405,
    //         statusText:"Method Not Allowed"
    //     })
    // }
    // return NextResponse.next()
    return NextResponse.next()
}

export const config = {
    matcher:'/api/auth'
}
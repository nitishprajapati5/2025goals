import { verify } from 'jsonwebtoken';
import * as APIConstants from '../_constants/apiConstants'
import { decodeJWT } from '../_utils/verifyJWT';
import { NextResponse } from 'next/server';
export async function GET(request){
    //Get aLL Journals
}

export async function POST(req){
    //Add Journals based on User name
    const data = await req.json();
    // console.log(data)
    // // console.log(await decodeJWT(req))
    // const {isLoggedIn,user} = await decodeJWT(req)
    // console.log(isLoggedIn,user)

    // if(!isLoggedIn || !user || user === null){
    //     return NextResponse.redirect("/api/auth")
    // }
    
    if(data.endpoint === APIConstants.ADDJOURNAL){
        return Response.json({
            requestBody:data.requestBody
        },{
            status:200,
            statusText:"SUCCESS"
        })
    }

}
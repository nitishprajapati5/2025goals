import dbConnection from "../_dbConnection/dbConnection"
import * as ApiConstants from '../_constants/apiConstants'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";



function GenerateJWT(){

    return j

}

export async function GET(request) {

    const response = Response.json({ "name": "Nitish" }, {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': 'auth-cookie=Nitish-Prajaapti; Path=/; HttpOnly; Secure; SameSite=Strict'
        }
    });
    return response;
}



export async function POST(req,res){
    const data = await req.json();
    console.log(data.endpoint)
    if(data.endpoint === ApiConstants.LOGIN){
        console.log(data.requestBody)
        return Response.json({
            "requestBody":data.requestBody
        },
        {
            status:"200",
            statusText:"SUCCESS"
        })
    }
    if(data.endpoint === ApiConstants.REGISTRATION){
        console.log(data.requestBody)
        await prisma.registration.findFirst({
            where:data.requestBody.email
        }).then((res) => {
            return Response.json({
                "message":"Email Already Exists"
            },{
                status:409,
                statusText:"Email Already Exists"
            })
        })

        await prisma.registration.create({
            data:data.requestBody
        }).then((res) => {
            const response =  Response.json({})
            response.cookies.set("auth-cookie","apikey")

            return response
            
        })

        return Response.json({
            "requestBody":data.requestBody
        },
        {
            status:200,
            statusText:"SUCCESS"
        })
    }
    
}
import * as ApiConstants from '../_constants/apiConstants'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();



function GenerateJWT(user){
    const SECRET_KEY = process.env.JWT_SECRET_KEY;
    const data = {
        user:user,
        time:Date()
    }
    return jwt.sign(data,SECRET_KEY,{expiresIn:'7d'});

}

export async function GET(req,res) {
}



export async function POST(req,res){
    const data = await req.json();
    console.log(data.endpoint)
    if(data.endpoint === ApiConstants.LOGIN){
        console.log(data.requestBody)

        return await prisma.registration.findFirst({
            where:{
                AND:{
                    username:data.requestBody.username,
                    // password:data.requestBody.password
                }
            }
        }).then(async (user) => {
            const isMatch = await bcrypt.compare(data.requestBody.password,user.password)
            if(isMatch){
                let response = NextResponse.json({
                    responseBody:{
                        data:user,
                        message:"SUCCESS",
                        serviceId:ApiConstants.LOGIN,
                        error:null
                    }
                })

                response.cookies.set('auth-cookie',GenerateJWT(user))
                return response
            }
            else{
                return NextResponse.json({
                    responseBody:{
                        message:"Email or Password does not exist or is Invalid!",
                        serviceId:ApiConstants.LOGIN,
                        error:error,
                        data:null
                    }
                })
            }
        }).catch((error) => {
            return NextResponse.json({
                responseBody:{
                    message:"Cannot Login You Currently.Something Went Wrong!",
                    serviceId:ApiConstants.LOGIN,
                    error:error,
                    data:null
                }
                
            })
        })

    }
    if(data.endpoint === ApiConstants.REGISTRATION){
        console.log(data.requestBody)

        return await prisma.registration.findFirst({
            where:{
                email:data.requestBody.email
            }
        }).then(async (existingUser) => {
            if(existingUser){
                return NextResponse.json({
                    responseBody:{
                        data:existingUser,
                        message:"Email Already Exists",
                        serviceId:ApiConstants.REGISTRATION,
                        error:null
                    }}
                )
            }
            // Set Cookie on Creating
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(data.requestBody.password,salt)
            console.log(hashedPassword)
            return prisma.registration.create({
                data:{
                    email:data.requestBody.email,
                    name:data.requestBody.name,
                    password:hashedPassword,
                    username:data.requestBody.username
                }
            }).then((res) => {
                let response = NextResponse.json({
                    responseBody:{
                        data:res,
                        message:"SUCCESS",
                        serviceId:ApiConstants.REGISTRATION,
                        error:null
                    }
                })
                response.cookies.set("auth-cookie",GenerateJWT(res))
                return response;
                
            }).catch((error) => {
                return Response.json({
                    responseBody:{
                        message:"Cannot Create Account.Something Went Wrong!",
                        serviceId:ApiConstants.REGISTRATION,
                        error:error,
                        data:null
                    }
                    
                })
            })

            
        }).catch((error) => {
            return NextResponse.json({
                responseBody:{
                    message:"Cannot Check if Account Exists.Something Went Wrong!",
                    serviceId:ApiConstants.REGISTRATION,
                    error:error
                }
                
            })
        })
    }
    
}
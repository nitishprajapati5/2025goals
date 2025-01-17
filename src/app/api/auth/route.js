import { headers } from "next/headers";
import dbConnection from "../_dbConnection/dbConnection"
import { ApiResponse } from "../_utils/ApiResponse";

export async function GET(request){
    dbConnection();
    return Response.json({"name":"Nitish"})
}

export async function POST(req,res){
    
    return Response.json({
        "message":"Nitish is Here"
    },
    {
        status:"200",
        statusText:"SUCCESS"
    })
    //return new ApiResponse(200,{"message":"POST Request"},"Successfully")
}
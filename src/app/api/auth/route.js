import dbConnection from "../_dbConnection/dbConnection"
import * as ApiConstants from '../_constants/apiConstants'
export async function GET(request){
    dbConnection();
    return Response.json({"name":"Nitish"})
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

        return Response.json({
            "requestBody":data.requestBody
        },
        {
            status:200,
            statusText:"SUCCESS"
        })
    }
    
}
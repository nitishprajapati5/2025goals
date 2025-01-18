import * as APIConstants from '../_constants/apiConstants'

export async function GET(request){

}

export async function POST(req){
    const data = await req.json();
    console.log(data)

    if(data.endpoint === APIConstants.ADDJOURNAL){
        return Response.json({
            requestBody:data.requestBody
        },{
            status:200,
            statusText:"SUCCESS"
        })
    }

}
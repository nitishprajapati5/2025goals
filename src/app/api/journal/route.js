import * as APIConstants from '../_constants/apiConstants'

export async function GET(request){
    //Get aLL Journals
}

export async function POST(req){
    //Add Journals based on User name
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
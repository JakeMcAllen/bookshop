'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../config/db";


export async function GET() {

    try {

        try {
            const result = await excuteQuery({
                query: 'SELECT * FROM users',
                values: [],
            });
            console.log("ttt")
            console.log( result );
            console.log("ttt")
            return Response.json({message: "hello world ", result: result})

        } catch ( error ) {
            console.log( error );
            return Response.json({message: "hello world ", result: error})

        }
        



    } catch(e) {
        return Response.json({message: "Error on db ", Error: e})
    }
}

export async function POST(request: NextRequest) {
    const userData = await request.json();

    console.log("ppp");
    console.log(userData["obj1"]);
    console.log("ppp");

    // Do samething
    return Response.json({message: "hello world post ", resp: userData})


}
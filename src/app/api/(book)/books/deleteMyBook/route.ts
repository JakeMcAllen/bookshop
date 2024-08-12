'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


// Get all info by id
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'delete from book WHERE idBook='+userData["bookID"]+';',
            values: [],
        });
        console.log( result );
        console.log("delete book") 

        return Response.json({message: "Success", result: result})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

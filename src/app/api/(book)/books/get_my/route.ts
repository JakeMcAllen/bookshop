'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


// Get all info by id
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM book WHERE writer_id='+userData["idWriter"]+';',
            values: [],
        });
        console.log( result );
        console.log("delete book") 

        if (result[0] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Empty"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

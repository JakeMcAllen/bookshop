'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../../config/db";


// Get ids by genre
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'SELECT idBook FROM book WHERE Title LIKE "%' + userData["title"] +'%";',
            values: [],
        });
        console.log("get book")
        if (result[0] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Error"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

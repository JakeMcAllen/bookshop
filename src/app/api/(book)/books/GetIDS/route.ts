'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


// Get ids
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'SELECT idBook FROM book LIMIT ' + userData["book_number"] + ' OFFSET ' + userData["book_number"] * userData["page_number"] + ';',
            values: [],
        });
        console.log('get book IDS  SELECT idBook FROM book LIMIT ' + userData["book_number"] + ' OFFSET ' + userData["book_number"] * userData["page_number"] + ';')
        console.log( result );
        console.log("get book IDS")
        if (result[0] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Empty"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

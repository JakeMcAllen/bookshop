'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


// Get number of pages
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        console.log('SELECT COUNT(idBook) / '+ userData["book4page"] +' as num_page FROM book ;');
        
        const result = await excuteQuery({
            query: 'SELECT ROUND(COUNT(idBook) / '+ userData["book4page"] +' , 0) as num_page FROM book ;',
            values: [],
        });

        console.log( result );
        console.log("get pages") 
        if (result[0] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Void"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../config/db";


// Get all info by id
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'SELECT Title, price, rating, reassume FROM book WHERE idBook=' + userData["idBook"] + ';',
            values: [],
        });
        console.log( result[0]["Title"] );
        console.log("get book") 
        if (result[0]["Title"] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Error"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

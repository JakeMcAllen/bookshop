'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../../config/db";


// Get ids by prices
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'SELECT idBook FROM bookshop_db.book WHERE price > ' + userData["min_price"] + ' and price < ' + userData["max_price"] + ';',
            values: [],
        });
        console.log('get book    SELECT idBook FROM bookshop_db.book WHERE price > ' + userData["min_price"] + ' and price < ' + userData["max_price"] + ';')
        if (result[0] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Empty"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

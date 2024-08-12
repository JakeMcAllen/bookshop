'use server'


import excuteQuery from "@/app/config/db";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const userData = await request.json();

    try {
        const result = await excuteQuery({
            query: 'UPDATE book SET n_rating = n_rating + 1, rating=(( '+userData['stars']+' + rating ) / 2 ) WHERE idBook = '+userData['bookID']+';',
            values: [],
        });
        console.log("add book")
        console.log( result );
        console.log("add book")
        return Response.json({message: "Success"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }


}
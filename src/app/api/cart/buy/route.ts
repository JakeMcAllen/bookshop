'use server'


import excuteQuery from "@/app/config/db";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const userData = await request.json();

    try {
        const result = await excuteQuery({
            query: 'delete from cart WHERE user_id='+userData["userID"]+';',
            values: [],
        });
        console.log("ttt")
        console.log( result );
        console.log("ttt")
        if (result[0] != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Empty"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }


}
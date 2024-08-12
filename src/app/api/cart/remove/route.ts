'use server'


import excuteQuery from "@/app/config/db";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const userData = await request.json();

    try {
        const result = await excuteQuery({
            query: 'delete from cart WHERE idCart='+userData["cartID"]+';',
            values: [],
        });
        console.log("ttt")
        console.log( result );
        console.log("ttt")
        return Response.json({message: "Success"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }


}
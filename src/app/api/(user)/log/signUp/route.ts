'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";

export async function POST(request: NextRequest) {
    const userData = await request.json();

    try {
        const result = await excuteQuery({
            query: 'insert into users (email, password, first_name, last_name) VALUES ("' + userData["mail"] + '", "' + userData["password"] + '", "' + userData["first_name"] + '", "' + userData["last_name"] + '" )',
            values: [],
        });
        console.log("login")
        console.log( result );
        console.log("login")

        if (result["insertId"] > 0) return Response.json({message: "Saved"})
        else return Response.json({message: "Error"}) 

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "User not saved ", result: error})
    }
        
}
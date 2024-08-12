'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM bookshop_db.users WHERE email="' + userData["email"] + '" and password="' + userData["password"] + '";',
            values: [],
        });
        console.log("login: " + 'SELECT * FROM bookshop_db.users WHERE email="' + userData["email"] + '" and password="' + userData["password"] + '";')
        console.log( result[0]["idUSERS"] );

        // TODO: JWT ??? 

        console.log("login")
        if (result[0]["idUSERS"] > 0) return Response.json({message: "Log", result: result[0]["idUSERS"], LastName: result[0]["last_name"]})
        else return Response.json({message: "Error"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


// Modify book
export async function POST(request: NextRequest) {
    const userData = await request.json();
    console.log("modify book         " + 'UPDATE book SET Title='+userData["Title"]+', page_num='+userData["Page_num"]+', price='+userData["Price"]+', genre="'+userData["Genre"] +'", Description="'+userData["Description"]+'"  WHERE idBook = '+userData["idBook"]) 
    
    try {
        const result = await excuteQuery({
            query: 'UPDATE book SET Title="'+userData["Title"]+'", page_num='+userData["Page_num"]+', price='+userData["Price"]+', genre="'+userData["Genre"] +'", Description="'+userData["Description"]+'", Pubblication= CAST("'+userData["Pubblication"]+'" AS DATETIME) WHERE idBook = '+userData["idBook"]+';',
            values: [],
        });
        console.log( result );

        if (result != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Error"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

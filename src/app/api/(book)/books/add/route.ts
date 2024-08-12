'use server'


import { NextRequest } from "next/server";
import excuteQuery from "../../../../config/db";


// Get all info by id
export async function POST(request: NextRequest) {
    const userData = await request.json();
    
    try {
        const result = await excuteQuery({
            query: 'insert into book (Title, page_num, writer_id, rating, price, genre, Description) VALUES ("'+userData["Title"]+'", '+userData["Page_num"]+', '+userData["writerID"]+', 3, '+userData["Price"]+', "'+userData["Genre"]+'", "'+userData["Description"]+'");',
            values: [],
        });
        console.log( result );
        console.log("get book " + 'insert into book (Title, page_num, writer_id, rating, price, genre, Description) VALUES ("'+userData["Title"]+'", '+userData["Page_num"]+', '+userData["writerID"]+', 3, '+userData["Price"]+', '+userData["Genre"]+', "'+userData["Description"]+'");',) 

        if (result != undefined) return Response.json({message: "Success", result: result})
        else return Response.json({message: "Error"})

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }
        
}

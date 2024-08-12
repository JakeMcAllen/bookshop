'use server'


import excuteQuery from "@/app/config/db";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const userData = await request.json();

    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM cart WHERE user_id='+userData["userID"]+' and book_id='+userData["bookID"]+';',
            values: [],
        });

        console.log('add book SELECT * FROM cart WHERE user_id='+userData["userID"]+' and book_id='+userData["bookID"]+';')
        console.log( result.length );
        console.log("add book")        
        
        if (result.length > 0) {
            // ADD a pair
            const result_ADD_PAIR = await excuteQuery({
                query: 'UPDATE cart SET pairs = pairs + 1 WHERE user_id='+userData["userID"]+' and book_id='+userData["bookID"]+';',
                values: [],
            }); 
            console.log("result_ADD_PAIR");
            console.log(result_ADD_PAIR);
            console.log("result_ADD_PAIR");
            return Response.json({message: "Success"})


        } else {
            // ADD to cart 
            const result_ADD_CART = await excuteQuery({
                query: 'insert into cart (user_id, book_id) VALUES ('+userData["userID"]+','+userData["bookID"]+');',
                values: [],
            }); 
            console.log("result_ADD_CART");
            console.log(result_ADD_CART);
            console.log("result_ADD_CART");
            return Response.json({message: "Success"})

        }

        

    } catch ( error ) {
        console.log( error );
        return Response.json({message: "Error", result: error})

    }


}
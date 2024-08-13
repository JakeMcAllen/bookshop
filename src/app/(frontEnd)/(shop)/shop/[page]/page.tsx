"use client";

import Shop from "../page";


export default function ShopNumb( {params} : {params: {page: number}} ) {

    return (
        <Shop currentPage={params.page}/>
    )

}

"use client";

import { useEffect } from "react";

import helloGet, { helloPost } from "./(functions)/hello/hello"


export default async function Home() {



  useEffect(() => { 
  
    
    
    helloGet(); 
    helloPost();

  }, [])

  
  return (
    <>
      Home
    </>
  );
}

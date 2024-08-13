"use client";

import { useEffect } from "react";

import helloGet, { helloPost } from "./(functions)/hello/hello"
import { Typography } from "@mui/material";
import Link from "next/link";


export default async function Home() {



  useEffect(() => { 
  

  }, [])

  
  return (
    <>
      <Typography variant="h2" style={{marginTop: "15px"}}>Challenge AI</Typography>
      <p> Creation of a web application for a bookshop. </p> 
      <p> GIT repository: <a href="https://github.com/JakeMcAllen/bookshop">bookshop</a> </p>
      <p> For start using this application try to navigate into <Link href={"shop"}> SHOP </Link> or try <Link href={"LogIn"}> LogIn </Link> </p>
    </>
  );
}

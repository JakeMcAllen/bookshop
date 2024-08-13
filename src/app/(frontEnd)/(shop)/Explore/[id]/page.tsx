"use client";

import { CardMedia, Fab, Grid, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Explore_BookByID, rateBook } from "./../../../../(functions)/book/book_shop"

export default function Explore(
  {params} : {params: {id: number}}
) {

  // const router = useRouter();
  // console.log(router.query.id);
  console.log(params.id);
  

  // const [ratingValue, setRatingValue] = useState<number>(3);
  const [id, _] = useState<null | number>(params.id);
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stars, setStars] = useState<number>(2.5);
  const [Pubblication, setPubblication] = useState<string>("");
  const [reassume, setReassume] = useState<string>("");
  const [Description, setDescription] = useState<String>("");




  const setRatingValue = async (newValue: number) => {
    setStars(newValue)
    rateBook(rateBook, params.id)
  }

  
  useEffect(() => { 

    const fetchData = async () => {

      let bk = await Explore_BookByID(id)

      if (bk["message"] === "Success") {

        let rs = bk["result"][0]
        setTitle(rs["Title"])
        setPrice(rs["price"])
        setStars(rs["rating"])
        setPubblication(rs["Pubblication"])
        setReassume(rs["reassume"])
        setDescription(rs["Description"])

        console.log("rs");
        console.log(rs);
        console.log("rs");

      } 
      


    }

    fetchData().catch(console.error);

  }, [])
  

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Fab color="primary" aria-label="Back" href="/shop" style={{marginTop: "5px", marginLeft: "15px"}}>
          <ArrowBackIcon />
        </Fab>
      </Grid>
      <Typography variant="h1"> {title} </Typography>
      <>
        <CardMedia
            component="img"
            alt="green iguana"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs.youcanprint.it%2Fwp-content%2Fuploads%2F2022%2F05%2F61xSNpivMML.jpeg&f=1&nofb=1&ipt=23bf5efbd73a5d8d4bdce314184091fc8b8208e820c322d18e5f30f6247bfc1e&ipo=images"
            sx={{height: "10%", width: "10%" }}
        />
      </>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={stars}
        onChange={(event, newValue) => {
          if (newValue == null) newValue = 2.5
          setRatingValue(newValue);
        }}
      />
      <Typography> Price: {price} </Typography>
      <Typography> Pubblication: {Pubblication} </Typography>
      <Typography> Riassunto: </Typography>
      <p>{reassume != "" ? reassume : Description}</p>
    </>
  );
}

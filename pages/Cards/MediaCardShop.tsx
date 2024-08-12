"use client";

import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Height } from '@mui/icons-material';
import { Grid, Popover } from "@mui/material";

import { Explore_BookByID } from "./../../src/app/(functions)/book/book_shop"
import Link from "next/link";
import { getCookie, setCookie } from 'cookies-next';

import { add_to_cart } from "./../../src/app/(functions)/cart/management"


export default function ImgMediaCard({id_card} :
  {id_card: number}
) {
  console.log("id_card");
  console.log(id_card);
  
  const [id, _] = useState<null | number>(id_card);

  const [title, setTitle] = useState<string>("Null");
  const [price, setPrice] = useState<null | number>(10);
  const [reassume, setReassume] = useState<"">("");


  const [message, setMessage] = useState<string>("");


  useEffect(() => { 

    const fetchData = async () => {
      let res = await Explore_BookByID(id_card)

      console.log("explore");
      console.log(res["result"][0]);
      let val = res["result"][0];

      setTitle(val["Title"])
      setPrice(val["price"])
      setReassume(val["reassume"].substr(25))



    }

    fetchData().catch(console.error);

  }, [])


  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    
    let userID = getCookie('id')

    console.log("userID");
    console.log(userID);
    console.log("userID");


    if (userID != undefined) {
      
      setMessage("ADD")
      setAnchorEl(event.currentTarget);

      let res = await add_to_cart(userID, id_card);

      
    } else {
      // Error message 
      setAnchorEl(event.currentTarget);
      setMessage("You must log before.")
    }


  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id_opn = open ? 'simple-popover' : undefined;





  return (
    <Card sx={{ maxWidth: 345, minWidth: 245, border: "0px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="30px"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblogs.youcanprint.it%2Fwp-content%2Fuploads%2F2022%2F05%2F61xSNpivMML.jpeg&f=1&nofb=1&ipt=23bf5efbd73a5d8d4bdce314184091fc8b8208e820c322d18e5f30f6247bfc1e&ipo=images"
        sx={{height: "50%", width: "80%", marginRight: "10%", marginLeft: "10%"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {reassume}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: <>{price}</>
        </Typography>
      </CardContent>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CardActions>
          <Button size="small" href={"/Explore/"+id} >
            Explore
          </Button>
          <Button aria-describedby={id_opn} variant="contained" size="small" onClick={handleClick}>
            Buy
          </Button>
          <Popover
            id={id_opn}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            style={{padding: "15px"}}
          >
            {message === "ADD" ?
              <Typography sx={{ p: 2 }}>Add to <Link href={"/cart"} style={{color: "#0b2cdb", fontWeight: "900", fontSize: "x-large"}}>cart</Link></Typography>
              :
              <Typography sx={{ p: 2 }}> {message}</Typography>
            }
            
          </Popover>
        </CardActions>
      </Grid>
    </Card>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Item from "../../../../../pages/Items/ShopItem";
import { Visibility } from "@mui/icons-material";

import { buy_All, cart_info, remove } from "./../../../(functions)/cart/management"
import { getCookie, setCookie } from 'cookies-next';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Cart() {

    const [loading, setLoading] = useState(true);


    useEffect(() => { 
  
        const fetchData = async () => {
          
            let res = await cart_info(getCookie("id"))
            let priceTot = 0;

            console.log("res");
            console.log(res["result"]);
            console.log("res");



            if (res["message"] == "Success") {
                setBooks(res["result"])


                for (let index = 0; index < res["result"].length; index++) 
                    { priceTot += res["result"][index]["price"] * res["result"][index]["pairs"]; }

                console.log("priceTot");
                console.log(priceTot);
                setPrice(priceTot)
            }
 
    
        }    
        setLoading(true)
        fetchData().catch(console.error);
        setLoading(false)
    
    }, [])

    
    const [books, setBooks] = useState<number[]>([]);
    const [price, setPrice] = useState<number>(0); 


    
    async function alertChanheVisibility () {
        handleClickOpen()
        await buy_All(getCookie("id"))
    }
    async function deleteThisItem (id_Cart: number) {
        setLoading(true)
        console.log(id_Cart);
        
        await remove(id_Cart)

        let res = []
        let priceTot = 0

        for (let index : number = 0; index < books.length; index++) { 
            if (books[index]["idCart"] != id_Cart) {
                res.push(books[index])
                priceTot += books[index]["price"]
            } 
                
        
        }

        setPrice(priceTot)
        setBooks(res)

        setLoading(false)
    }
    


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
  


  return (
    <> 
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            margin={"50px 0"}
        >        
                <Typography variant="h2">Books cart:</Typography>
                {loading ? 
                    <CircularProgress style={{marginTop: "15px"}} color="success" />
                    :
                    <TableContainer component={Paper} style={{margin: "0px 15px", width: "80%"}}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Book id</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Genre</TableCell>
                                <TableCell align="right">Rating</TableCell>
                                <TableCell align="right">Pairs</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {books.map((row: any, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row["book_id"]}
                                    </TableCell>
                                    <TableCell align="right">{row["Title"]}</TableCell>
                                    <TableCell align="right">{row["price"]}</TableCell>
                                    <TableCell align="right">{row["genre"]}</TableCell>
                                    <TableCell align="right">{row["rating"]}</TableCell>
                                    <TableCell align="right">{row["pairs"]}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="outlined" onClick={() => deleteThisItem(row["idCart"])}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                margin={"50px 0"}
            >
                <Typography variant="h4" style={{marginRight: "15px"}}>Total: <>{price}</></Typography>
                <Button 
                    onClick={() => {
                        alertChanheVisibility();
                    }}
                    style={{color: "white",  backgroundColor: "green", padding: "5px", borderRadius: "9px", fontWeight: "700", fontSize: "xx-large"}}
                >
                    Buy
                </Button>
            </Grid>
        </Grid>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{width: "300px", textAlignLast: "center"}}>
                    All your items have been PURCHASED! 
                    THANK YOU FOR YOUR ORDER
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    </>
  );
}





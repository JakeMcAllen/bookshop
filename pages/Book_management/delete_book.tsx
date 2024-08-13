"use client";

import { useEffect, useState } from "react";
import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

import { getBook_By_write_id, removeBook } from "../../src/app/(functions)/book/book_myBooks"

import { getCookie } from 'cookies-next';


export default function Delete_book() {

    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);


    // const [value, setValue] = useState(0);

    useEffect(() => { 
        const fetchData = async () => {
            let idUsr = getCookie("id")

            let res = await getBook_By_write_id(idUsr)

            console.log("res ");
            console.log(res);
            console.log("res");
            
            if (res["message"] == "Success") {
                setBooks(res["result"])
            }
        }    
        setLoading(true)
        fetchData().catch(console.error);
        setLoading(false)

    }, [])



    async function deleteThisItem (id_Cart: number) {
        setLoading(true)
        console.log(id_Cart);
        
        await removeBook(id_Cart)

        let res : any = []

        for (let index : number = 0; index < books.length; index++) 
            { if (books[index]["idBook"] != id_Cart) { res.push(books[index]) }  }
        
        setBooks(res)

        setLoading(false)
    }



    

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                margin={"50px 0"}
                style={{width: "1000px"}}
            >        
                <Typography variant="h2">Delete book:</Typography>
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
                                        {row["idBook"]}
                                    </TableCell>
                                    <TableCell align="right">{row["Title"]}</TableCell>
                                    <TableCell align="right">{row["price"]}</TableCell>
                                    <TableCell align="right">{row["genre"]}</TableCell>
                                    <TableCell align="right">{row["rating"]}</TableCell>
                                    <TableCell align="right">{row["pairs"]}</TableCell>
                                    <TableCell align="right">
                                        <Button variant="outlined" onClick={() => deleteThisItem(row["idBook"])}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Grid>
        </>
    );

}
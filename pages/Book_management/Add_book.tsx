import { Description } from "@mui/icons-material";
import { Button, FormControl, Grid, InputLabel, MenuItem, Popover, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { addBookMyBook } from "./../../src/app/(functions)/book/book_myBooks"
import { getCookie } from 'cookies-next';


export default function Add_book() {

    // const [value, setValue] = useState(0);
    const genre = ["none", "Triller", "Commedy", "Horror", "Fantasy", "Story"]
    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);

    const [Pubblication, setPubblication] = useState<undefined | string>()

    const [genre_f, setGenre_f] = useState('');
    const [description, setDescription] = useState('');
    
  
    const handleChange_title = async (event: React.ChangeEvent<HTMLInputElement>) => { setTitle(event.target.value); }
    const handleChange_genre = async (event: SelectChangeEvent) => { setGenre_f(event.target.value); }
    const handleChange_price = async (event: React.ChangeEvent<HTMLInputElement>) => { setPrice(Number(event.target.value) ); }
    const handleChange_Pubblication = async (event: React.ChangeEvent<HTMLInputElement>) => { setPubblication( event.target.value); }
    const handleChange_Page_Number = async (event: React.ChangeEvent<HTMLInputElement>) => { setPageNumber( Number(event.target.value) ); }
    const handleChange_Desciption = async (event: React.ChangeEvent<HTMLInputElement>) => { setDescription(event.target.value); }



    const ManageInsert = async (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        let idUsr = getCookie("id");


        if (idUsr != undefined && title != "" && price > 0 && pageNumber > 0 && Pubblication != undefined && Pubblication.split("-").length == 3 && genre_f != "" && genre_f != "none" && description != "")
            await addBookMyBook(title, price, genre_f, Pubblication, description, pageNumber, idUsr )
        else {

            console.log("title");
            console.log(idUsr);
            console.log(title);
            console.log(price);
            console.log(Pubblication);

            console.log(pageNumber);
            console.log(genre_f);
            console.log(description);
        }


    }

    const handleClose = () => {
        setAnchorEl(null);
    };
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id_P = open ? 'simple-popover' : undefined;



    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h4" style={{margin: "25px"}}>Add book</Typography>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{margin: "15px 0"}}
                >
                    <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={handleChange_title}/>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{marginBottom: "15px"}}
                >
                    <TextField id="outlined-basic" value={price} type="number" label="Price" variant="outlined" onChange={handleChange_price} />
                    <TextField id="outlined-basic" value={pageNumber} type="number" label="Number of pages" variant="outlined" onChange={handleChange_Page_Number} />
                    <input id="outlined-basic" type="date" name="dateRequired" onChange={handleChange_Pubblication} style={{height: "50px", width: "150px", paddingLeft: "10px"}} /> 
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{border: "20px", borderColor: "#1976d2",}}>
                        <InputLabel id="demo-select-small-label">Genre</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={genre_f}
                            label="Genre"
                            style={{backgroundColor: "white"}}
                            onChange={handleChange_genre}
                        >
                        {genre.map((val, index) => (
                            <MenuItem value={val != "none" ? val : ""}>{val}</MenuItem>  
                        ))}
                        </Select>
                    </FormControl>                </Grid>
                <TextField 
                    id="outlined-basic" 
                    label="Description" 
                    multiline
                    rows={10}
                    value={description}
                    variant="outlined" 
                    style={{maxWidth: "600px", minWidth: "600px"}}
                    onChange={handleChange_Desciption}
                />
                <Popover
                    id={id_P}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                >
                    <Typography style={{margin: "15px", fontSize: "20px", fontWeight: "700"}} >Book is add !!!</Typography>
                </Popover>
                <Button aria-describedby={id_P} variant="contained" style={{margin: "15px 0", backgroundColor: "green", borderRadius: "25px", color: "white"}} onClick={ManageInsert}>
                    <Typography style={{padding: "20px", fontWeight: "700", fontSize: "xx-large"}}>ADD</Typography>
                </Button>
            </Grid>

        </>
    );

}
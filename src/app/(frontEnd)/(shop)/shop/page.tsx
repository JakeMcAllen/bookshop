"use client";

import { useState, useEffect } from "react";

import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Slider, Typography } from "@mui/material";
import Item from "../../../../../pages/Items/ShopItem";
import ImgMediaCard from "../../../../../pages/Cards/MediaCardShop";

import { getBooksIDs, getBook_ByPrice, getBook_ByGenre, getBooksIDsWithPriceAndTitle } from "./../../../(functions)/book/book_shop"
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Shop() {


  const numForPage = 6
  const [loading, setLoading] = useState(true);


  useEffect(() => { 
  
    const fetchData = async () => {

      let res = await getBooksIDs(numForPage, 0)
      
      console.log("res");
      console.log(res);
      console.log("res");

      if (res["message"] == "Success") {

        let varCont = []

        for (let index = 0; index < res["result"].length; index++) 
          { varCont.push(res["result"][index]["idBook"]) }
        setBooks(varCont)

      } 
      
      


    }    

    setLoading(true)
    fetchData().catch(console.error);
    setLoading(false)

  }, [])


  const [books, setBooks] = useState<number[]>([]);


  // Filters
  const genre = ["none", "Triller", "Commedy", "Horror", "Fantasy", "Story"]
  const filtersName = ["evidence", "price: increasing", "price: decreasing", "A-Z", "Z-A"]



  const [genre_f, setGenre_f] = useState('');
  const [filter_f, setFilter_f] = useState('');

  
  const handleChange_genre = async (event: SelectChangeEvent) => {
    setLoading(true)

    setGenre_f(event.target.value);
    
    if (event.target.value == "") {

      let res = await getBooksIDs(numForPage, 0)
      
      console.log("res");
      console.log(res);
      console.log("res");

      if (res["message"] == "Success") {

        let varCont = []

        for (let index = 0; index < res["result"].length; index++) 
            { varCont.push(res["result"][index]["idBook"]) }
        setBooks(varCont)

      } 
      
    } else {


      let res = await getBook_ByGenre(event.target.value)



      if (res["message"] == "Success") {

        let varCont = []

        for (let index = 0; index < res["result"].length; index++) 
            { varCont.push(res["result"][index]["idBook"]) }
        setBooks(varCont)

      } 
    
    }
    setLoading(false)


  };


  function sortThings(a: any, b: any) {
    a = a["Title"].toLowerCase();
    b = b["Title"].toLowerCase();
  
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    }
  }

  function sortThings_inv(a: any, b: any) {
    a = a["Title"].toLowerCase();
    b = b["Title"].toLowerCase();
  
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  }


  //   const filtersName = ["evidence", "price: increasing", "price: decreasing", "A-Z", "Z-A"]
  //   const [filter_f, setFilter_f] = useState('');
  
  const handleChange_filterBy = async (event: SelectChangeEvent) => {
    setLoading(true)
    if (event.target.value == filtersName[0]) setFilter_f("")
    else setFilter_f(event.target.value)

    let res = await getBooksIDsWithPriceAndTitle(numForPage, 0)
      
    console.log("getBooksIDsWithPriceAndTitle");
    console.log(res);
    console.log("getBooksIDsWithPriceAndTitle");
    

    setBooks([])


    if (res["message"] == "Success") {
      
      let varCont = []
      let varCont_f = []



      for (let index = 0; index < res["result"].length; index++) { varCont.push(res["result"][index]) }
    

      // Aply filters 
      if (event.target.value == filtersName[1]) {
        varCont = varCont.sort(function (a, b) { return a["price"] - b["price"] })
      } else if (event.target.value == filtersName[2]) {
        varCont = varCont.sort(function (a, b) { return b["price"] - a["price"] })
      } else if (event.target.value == filtersName[3]) {
        varCont.sort(sortThings)
      } else if (event.target.value == filtersName[3]) {
        varCont.sort(sortThings_inv)
      } else { console.log("error"); }


      for (let index = 0; index < varCont.length; index++) { varCont_f.push(varCont[index]["idBook"]) }
    

      console.log("varCont");
      console.log(varCont_f);
      console.log("varCont");
      

      setBooks(varCont_f)
      setLoading(false)
    } 


  }


  const resetSearch = async () => {
    setLoading(true)

    setPrice([0, 100])
    setGenre_f("")

    let res = await getBooksIDs(numForPage, 0)
      
    console.log("res");
    console.log(res);
    console.log("res");

    if (res["message"] == "Success") {

      let varCont = []

      for (let index = 0; index < res["result"].length; index++) 
          { varCont.push(res["result"][index]["idBook"]) }
      setBooks(varCont)

    } 
    setLoading(false)


  }

  const [price, setPrice] = useState<number[]>([0, 100]);
  const handleChange_price = async (event: Event, nv: number | number[]) => {
    setLoading(true)

    let newValue : number[] = []
    if (typeof nv === "number") console.log("Error")
    else newValue = nv


    setPrice(newValue as number[]);
    let val1 = newValue[0]
    let val2 = newValue[1]
    

    console.log("primaaaa " + newValue[0] + "  --- " + newValue[1]);
    if (newValue[0] > newValue[1]) {
      console.log("dopoooooo");
      

      val1 = newValue[1]
      val2 = newValue[0]
    }
    let res = await getBook_ByPrice(val2, val1);

    if (res["message"] == "Success") {

      let varCont = []

      for (let index = 0; index < res["result"].length; index++) 
          { varCont.push(res["result"][index]["idBook"]) }
      setBooks(varCont)

    } 
    setLoading(false)

  };



  return (
    <>
    
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{width: "100%"}}
      >
        <Box component="section" sx={{ p: 2, border: '1px dashed grey', marginTop: "15px", width: "95%", backgroundColor: "white", borderRadius: "9px", color: "white" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{width: "100%"}}
          >
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
              </FormControl>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{width: "200px"}}
            >
              <Typography id="track-false-slider" style={{color: "black"}} gutterBottom>
                Price range
              </Typography>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={price}
                defaultValue={[1, 100]}
                onChange={handleChange_price}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext_price}
                style={{width: "150px"}}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{width: "100%"}}
          >
            <Button onClick={resetSearch}>RESET</Button>
          </Grid>
      </Box>
      <Box component="section" sx={{ p: 2, margin: "0px 0px 10px 0px", width: "95%", backgroundColor: "white", borderRadius: "9px", color: "white" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{width: "100%"}}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{border: "0px", borderColor: "#1976d2",}}>
              <InputLabel id="demo-select-small-label">Sorting by</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={filter_f}
                label="Sorting by"
                style={{backgroundColor: "white"}}
                onChange={handleChange_filterBy}
              >
                {filtersName.map((val, index) => (
                  <MenuItem value={val != "none" ? val : ""}>{val}</MenuItem>  
                ))}
              </Select>
            </FormControl>
          </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, boxShadow: "none", margin: "auto" }}>
        <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {loading ? 
          <Box style={{margin: "15px"}}>
            <CircularProgress color="success" />
          </Box>
          : 
          books.map((id, index) => (
            <Grid key={index} item style={{maxWidth: "33%", minWidth: "100px"}}>
              <Item>
                <ImgMediaCard id_card={id}/>
              </Item>
            </Grid>
          ))
          }
        </Grid>
      </Box>
      </Grid>
    </>
  );
}



function valuetext_price(value: number) {
  return `${value}`;
}
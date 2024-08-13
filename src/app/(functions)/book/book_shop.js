// Return a list of ids of book to display with "getBook_byID"
export async function getBooksIDs(num_b, page_n) {

    let resp = await fetch('/api/books/GetIDS', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({book_number: num_b, page_number: page_n}),
    })
    return await resp.json();
    
}


export async function bk4pg(bk4pg) {

  console.log("getNumbOfPages");
  
  let resp = await fetch('/api/books/pages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({book4page: bk4pg}),
  })
  return await resp.json();

}

export async function getBooksIDsWithPriceAndTitle(num_b, page_n) {

  let resp = await fetch('/api/books/GetIDSPT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({book_number: num_b, page_number: page_n}),
  })
  return await resp.json();
  
}


// Display main info of books
export async function getBook_byID(bookID) {
    let resp = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({idBook: bookID}),
    })
    return await resp.json();
}

export async function getBook_ByPrice(maxPrice, minPrice) {

  let resp = await fetch('/api/books/filter/price', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({max_price: maxPrice, min_price: minPrice}),
  })
  return await resp.json();
  
}


export async function getBook_ByTitle(title) {

  let resp = await fetch('/api/books/filter/price', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({title: title}),
  })
  return await resp.json();
  
}


export async function getBook_ByGenre(gnr) {

    let resp = await fetch('/api/books/filter/genre', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({genre: gnr}),
    })
    return await resp.json();
    
}


export async function rateBook(str, bkID) {

  let resp = await fetch('/api/books/rate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({stars: str, bookID: bkID}),
  })
  return await resp.json();
  
}




// Return all infos of a specific book
export async function Explore_BookByID(bkID) {

    let resp = await fetch('/api/books/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({idBook: bkID}),
      })
      return await resp.json();

}



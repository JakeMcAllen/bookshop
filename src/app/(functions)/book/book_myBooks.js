export async function addBookMyBook(title, price, genre, description, pn, writer_id) {

    let resp = await fetch('/api/books/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({Title: title, Price: price, Page_num: pn, Genre: genre, Description: description, writerID: writer_id}),
    })
    return await resp.json();
    
}

export async function removeBook(bookID) {
    let resp = await fetch('/api/books/deleteMyBook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({bookID: bookID}),
    })
    return await resp.json();
}


export async function modifyBook(title, price, genre, description, pn, idBook) {

    let resp = await fetch('/api/book/modify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({Title: title, Price: price, Page_num: pn, Genre: genre, Description: description, idBook: idBook}),
    })
    return await resp.json();
    
}


export async function getBook_By_write_id(idW) {

  let resp = await fetch('/api/books/get_my', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({idWriter: idW}),
  })
  return await resp.json();
  
}
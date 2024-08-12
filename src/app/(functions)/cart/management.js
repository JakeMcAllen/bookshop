export async function add_to_cart(userid, bookid) {

    let resp = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({userID: userid, bookID: bookid}),
    })
    return await resp.json();
    
}

export async function remove(cartID) {

    let resp = await fetch('/api/cart/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({cartID: cartID}),
    })
    return await resp.json();
}


export async function cart_info(id_user) {

  let resp = await fetch('/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({userID: id_user}),
  })
  return await resp.json();
}



export async function buy_All(id_user) {

  let resp = await fetch('/api/cart/buy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({userID: id_user}),
  })
  return await resp.json();
}
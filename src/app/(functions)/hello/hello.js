export default async function helloGet() {

    let resp = await fetch('/api/hello', {
      method: 'GET',
    })
  
    const json = await resp.json();

    console.log("resp");
    console.log(json);
    console.log(resp);
    console.log("resp");
    
    return await resp.json();
}

export async function helloPost() {

    let resp = await fetch('/api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({obj1: "ciao", obj2: "world"}),
    })
    console.log("resp_p");
    const json = await resp.json();

  
    console.log(json);
    console.log(json["message"]);
    console.log("resp_p");

    return await json;
}
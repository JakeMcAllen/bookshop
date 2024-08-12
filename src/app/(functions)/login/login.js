export async function Registration(fn, ln, ml, pswrd) {

    let resp = await fetch('/api/log/signUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({first_name: fn, last_name: ln, mail: ml, password: pswrd}),
    })
    return await resp.json();
    
}

export async function Login(ml, pswrd) {

    let resp = await fetch('/api/log/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email: ml, password: pswrd}),
    })
    return await resp.json();
}
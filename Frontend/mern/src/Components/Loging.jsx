import React from 'react'
import { useState } from 'react'

const Loging = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const hanldlesubmit = () => {
        const payload = {
            email,
            password
        }
        fetch("http://localhost:8080/user/login",{
            method : "POST",
            headers: {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then((res)=> res.json())
        .then((res)=> {
            console.log(res)
            localStorage.setItem("Token", res.token);
        })
        .catch((err)=> console.log(err))
    }

  return (
    <div>
      <h1>Login</h1>

      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={hanldlesubmit}>Login</button>
    </div>
  )
}

export default Loging

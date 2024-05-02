"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router=useRouter();
    const navigate=(page)=>{
        router.push("/login"+page)
    }
  return (
    <div>
      <h1>Login</h1>
      <br/>
      <button onClick={()=>navigate("/loginstudent")}>Go to login Student</button>
      <br/>
      <button onClick={()=>navigate("/loginteacher")}>Go to login Teacher</button>
    </div>
  )
}

export default Login

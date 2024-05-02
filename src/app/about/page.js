"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const About = () => {
    const router=useRouter();
    const navigate=(page)=>{
        router.push("/about"+page)
    }
  return (
    <div>
      <h1>ABOUT</h1>
      <br/>
      <button onClick={()=>navigate("/aboutstudent")}>Go to About Student</button>
      <br/>
      <button onClick={()=>navigate("/about2")}>Go to About 2</button>
      <br/>
      <button onClick={()=>navigate("/contact")}>Go to Contact</button>
    </div>
  )
}

export default About

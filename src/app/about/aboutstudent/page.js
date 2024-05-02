"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Aboutstudent = () => {
    const router=useRouter()
  return (
    <div>
      <h1>About Student Section</h1>
      <br/>
      <button onClick={()=>router.push("/about") } className="border-black border m-1" >Go to About</button>
      <br/>
      <button onClick={()=>router.push("/about") } className="border-black border m-1" >Go to About</button>
    </div>
  )
}

export default Aboutstudent

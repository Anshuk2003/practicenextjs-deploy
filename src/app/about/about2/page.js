"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
    const router=useRouter()
  return (
    <div>
      <h2>ABOUT 2</h2>
      <br/>
      <button onClick={()=>router.push("/about") } className="border-black border m-1" >Go to About</button>
      <br/>
      <button onClick={()=>router.push("/about") } className="border-black border m-1" >Go to About</button>
    </div>
  )
}

export default page

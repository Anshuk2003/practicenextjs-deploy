"use client"

import ExampleServer from "./ExampleServer"

ExampleServer
export default function ExampleClient() {
    console.log("i am client")
  return (
    <div>
      <h2> This is Client Component </h2>
      <ExampleServer/>
    </div>
  )
}

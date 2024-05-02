import React from "react";
import getAllUsers from "../../../libr/getAllUsers"
import Link from 'next/link'
export default async function Users() {
    const usersData= getAllUsers();
    const users= await usersData;
    console.log(users);
  return (
    <div>
        
      {
        users.map((user)=>{
            return (
            <p key ={user.id}>
            <Link href= {`/users/${user.id}`} >{user.name}</Link>
            </p>
            )
        })
      }
    </div>
  )
}

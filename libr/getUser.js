import React from 'react'

export default async function getUser(userid) {
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`,{next :{revalidate :60}})
    if(!res.ok) throw new Error('failed to fetch');
  return res.json();
}

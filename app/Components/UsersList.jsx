"use client"

import { useEffect, useState } from "react"

const UsersList=()=>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((json)=> setUsers(json))
        .catch((error)=> console.log(error))
    },[])
    return(
        <div>
            <h2>Users List</h2>
            {
                users.map((el,i,t)=><h2>{el.name}</h2>)
            }
        </div>
    )
}

export default UsersList
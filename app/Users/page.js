import Link from "next/link"

export const metadata ={
    title : "User Page"
}
const UsersPage=async()=>{
   
    await new Promise(resolve => setTimeout(resolve, 2000))
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        next : {
            revalidate : 15
        }
    })
    const users = await res.json()
    return(
        <div>
            <h1>Users Page</h1>
            {
                users.map((el,i,t)=>
                <div key={el.id}>
                    <Link href={`/Users/${el.id}`}><h2>{el.name}</h2></Link>
                </div>    
                )
            }
        </div>
    )
}

export default UsersPage
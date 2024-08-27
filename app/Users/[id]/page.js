const UserProfil=async({params})=>{
    // console.log(props)
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`,{
        next : {
            revalidate : 15
        }
    })
    const user = await res.json()
    return(
        <div>
            <h1>Profil</h1>
            <h2>{params.id}</h2>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
        </div>
    )
}

export default UserProfil
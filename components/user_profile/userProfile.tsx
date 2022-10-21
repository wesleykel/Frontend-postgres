import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { useState } from 'react'
import 'animate.css';


const UserProfile = () => {
    const {user, error ,isLoading}=useUser()
  
const [welcome, setWelcome]=useState("Welcome")

   
if(!user){

return(null)

}

setTimeout(()=>{

setWelcome("username:")

},5000)


return(
<>

{!isLoading&&<div>{welcome} {user?.name} </div>}

</>
)
}

export default UserProfile
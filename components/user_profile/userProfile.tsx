import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { useState } from 'react'



const UserProfile = () => {
    const {user, error ,isLoading}=useUser()
  
const [welcome, setWelcome]=useState("Welcome")

   
if(!user){

return(null)

}

setTimeout(()=>{

setWelcome("Username:")

},5000)


return(
<>

{!isLoading&&<div className="text-xs  font-mono pt-1 pr-3">{welcome} {user?.name} </div>}

</>
)
}

export default UserProfile
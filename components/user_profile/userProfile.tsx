import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { useState } from 'react'

const UserProfile = () => {
    const {user, error ,isLoading}=useUser()
  

   
if(!user){

return(null)

}

const [welcome, setWelcome]=useState(`Welcome ${user?.name}`)
setTimeout(()=>{

setWelcome(`${user?.name}`)

},5000)


return(
<>

{!isLoading&&<div>{welcome}</div>}


</>
)
}

export default UserProfile
import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
const UserLogin = () => {
     const {user, error ,isLoading}=useUser()
   
    return (
        <div>
          {!user&&<a href="/api/auth/login">Login</a>}
     <p></p>
           {user&&<a href="/api/auth/logout">Logout</a>}   
        </div>
    )
}

export default UserLogin






  

 

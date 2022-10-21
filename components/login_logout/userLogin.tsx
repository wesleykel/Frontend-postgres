import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import Router from 'next/router'
import UserProfile from '../user_profile/userProfile'
const UserLogin = () => {
     const {user, error ,isLoading}=useUser()
   



    return (
        <div className="flex justify-end">
            <UserProfile/>
          {!user&&<button onClick={()=>Router.push("/api/auth/login")} className="bg-pink-400 hover:bg-red-500 text-white font-mono  px-4 rounded  " >Login</button>}   
  
           {user&&<button onClick={()=>Router.push("/api/auth/logout")} className="bg-green-300 hover:bg-green-500  text-sm text-white font-mono  px-4 rounded" >Logout</button>}   
        </div>
    )
}

export default UserLogin






  

 

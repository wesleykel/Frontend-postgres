import type { NextPage } from 'next'
import { useUser } from '@auth0/nextjs-auth0'
import Heading from '../components/heading/heading'
import UserLogin from '../components/login_logout/userLogin'
import UserProfile from '../components/user_profile/userProfile'
import NavTitle from '../components/nav_title/navTitle'
//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

const Home: NextPage = (data) => {
  
    console.log(data)

  

  //console.log(user?.nickname)*/
   return(
     <>  
     <nav  className="  border border-grey-600 flex justify-between w-6/6  py-3 pr-3"> 
         
<NavTitle/>
     <UserLogin/>
 
     </nav>  
     <Heading/>


  
     </>

   
   ) 
  
}

export async function getServerSideProps(){

  const res = await fetch("https://postgress.vercel.app/user/GSSP")
  const data = await res.json()
  
  return{
    props:data
  }
}
export default Home
